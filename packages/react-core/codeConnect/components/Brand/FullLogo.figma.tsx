import figma from '@figma/code-connect';
import { Brand } from '@patternfly/react-core';

/**
 * PatternFly FullLogo integration for Figma Code Connect
 */

figma.connect(
  Brand,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2104-3689&m=dev',
  {
    props: {
      semantic: figma.enum('Semantic Color Tokens', {
        'Auto (Light)': 'auto-light'
      })
    },
    example: (props) => <Brand alt="Brand" />
  }
);
