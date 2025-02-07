import * as fs from 'ts-node';
import { load } from 'js-yaml';

interface IconConfig {
  name: string;
  nodeId: string;
}

const icons = load(fs.readFileSync('./icons.yaml', 'utf8')) as { icons: IconConfig[] };

const output = `// Generated file - do not edit directly
import React from 'react';
import { Icon } from './Icon';
import figma from '@figma/code-connect';

${icons.icons
  .map(
    ({ name, nodeId }) => `figma.connect("${nodeId}", {
 props: {
   icon: figma.instance('🖼️ Icon'),
   size: figma.enum('Icon Size', {
     'Standalone - Small': 'sm',
     'Standalone - Medium': 'md',
     'Standalone - Large': 'lg',
     'Standalone - XL': 'xl',
     'Standalone -2XL': '2xl',
     'Standalone - 3XL': '3xl'
   })
 },
 example: ({ icon, ...props }) => <Icon {...props}>{icon}</Icon>
});`
  )
  .join('\n\n')}
`;

fs.writeFileSync('Icon.connect.ts', output);
