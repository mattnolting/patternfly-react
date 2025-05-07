import figma from '@figma/code-connect';
import { TreeView } from '@patternfly/react-core';

/**
 * PatternFly TreeView - Compact Node integration for Figma Code Connect
 */

figma.connect(
  TreeView,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=12615-2825&m=dev',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => <TreeView>{props.children}</TreeView>
  }
);
