import figma from '@figma/code-connect';
import { TreeView } from '@patternfly/react-core';
import { TreeNodeBaseComponent } from './TreeNodeBaseComponent';

/**
 * PatternFly TreeView - Compact Node integration for Figma Code Connect
 */

figma.connect(
  TreeView,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=12615-3260&m=dev',
  {
    props: {
      state: figma.enum('State', {
        Default: 'default',
        Hover: 'hover',
        Selected: 'selected',
        'Expanded - Not Selected': 'expanded-not-selected'
      }),
      expandable: figma.boolean('Expandable')
    },
    example: (props) => (
      <TreeView variant="compact">
        <TreeNodeBaseComponent text="Tree node" showCaret />
        <TreeNodeBaseComponent text="Tree node" showCaret>
          <TreeNodeBaseComponent text="Tree node" showCaret />
          <TreeNodeBaseComponent text="Tree node" />
          <TreeNodeBaseComponent text="Tree node" showCaret />
        </TreeNodeBaseComponent>
        <TreeNodeBaseComponent text="Tree node" showCaret />
        <TreeNodeBaseComponent text="Tree node" showCaret />
        <TreeNodeBaseComponent text="Tree node" showCaret />
        <TreeNodeBaseComponent text="Tree node" showCaret />
        <TreeNodeBaseComponent text="Tree node" showCaret />
        <TreeNodeBaseComponent text="Tree node" showCaret />
        <TreeNodeBaseComponent text="Tree node" showCaret />
        <TreeNodeBaseComponent text="Tree node" showCaret />
      </TreeView>
    )
  }
);
