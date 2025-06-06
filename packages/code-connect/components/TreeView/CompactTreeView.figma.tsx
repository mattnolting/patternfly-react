import figma from '@figma/code-connect';
import { TreeView } from '@patternfly/react-core';

/**
 * PatternFly TreeView - Compact Node integration for Figma Code Connect
 */

figma.connect(
  TreeView,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=12615-3260&m=dev',
  {
    props: {
      children: '*'
    },
    example: (props) => (
      // Documentation for TreeView can be found at https://www.patternfly.org/components/tree-view
      <TreeView variant="compact">{props.children}</TreeView>
    )
  }
);
