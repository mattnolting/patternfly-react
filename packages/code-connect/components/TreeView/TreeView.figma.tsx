import figma from '@figma/code-connect';
import { TreeView } from '@patternfly/react-core';

/**
 * PatternFly TreeNodeBaseComponent integration for Figma Code Connect
 */

figma.connect(
  TreeView,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=12615-2825&m=dev',
  {
    props: {
      // object
      indent: {
        lvl1Indent: figma.boolean('Lvl 1 Indent'),
        lvl3Indent: figma.boolean('Lvl 3 Indent'),
        lvl4Indent: figma.boolean('Lvl 4 Indent')
      },

      children: figma.children('*')
    },
    example: (props) => (
      // Documentation for TreeView can be found at https://www.patternfly.org/components/tree-view
      <TreeView isCompact indent={props.indent}>
        {props.children}
      </TreeView>
    )
  }
);
