import figma from '@figma/code-connect';
import { TreeViewListItem } from '@patternfly/react-core';

/**
 * PatternFly TreeViewNode integration for Figma Code Connect
 */

figma.connect(
  TreeViewListItem,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=12615-3260&m=dev',
  {
    props: {
      isSelected: figma.enum('State', {
        Selected: true,
        Default: false,
        Hover: false,
        'Expanded - Not Selected': false
      }),
      isExpanded: figma.enum('State', {
        'Expanded - Not Selected': true,
        Default: false,
        Hover: false,
        Selected: false
      }),
      expandable: figma.boolean('Expandable'),
      text: figma.nestedProps('.Tree Node Base Component', {
        text: figma.string('Text', 'Tree node')
      }),
      icon: figma.nestedProps('.Tree Node Base Component', {
        icon: figma.boolean('With Icon')
      }),
      actions: figma.nestedProps('.Tree Node Base Component', {
        actions: figma.boolean('With Actions')
      }),
      hasCheck: figma.nestedProps('.Tree Node Base Component', {
        hasCheck: figma.boolean('With Checkbox')
      }),
      hasBadge: figma.nestedProps('.Tree Node Base Component', {
        hasBadge: figma.boolean('Show Badge')
      }),
      active: figma.nestedProps('.Tree Node Base Component', {
        active: figma.boolean('Default Text')
      }),
      content: figma.nestedProps('.Tree Node Base Component', {
        content: figma.boolean('Sep. Selection Text')
      }),
      useGuideLine: figma.nestedProps('.Tree Node Base Component', {
        useGuideLine: figma.boolean('Node Guide')
      }),
      useLastGuideLine: figma.nestedProps('.Tree Node Base Component', {
        useLastGuideLine: figma.boolean('End Node Guide')
      }),
      showCaret: figma.nestedProps('.Tree Node Base Component', {
        showCaret: figma.boolean('Show Caret')
      }),
      inset: figma.nestedProps('.Tree Node Base Component', {
        inset: figma.boolean('No Caret Indent')
      }),
      indent: figma.nestedProps('.Tree Node Base Component', {
        indent: figma.enum('Indent Level', {
          'Lvl 1 Indent': 1,
          'Lvl 2 Indent': 2,
          'Lvl 3 Indent': 3,
          'Lvl 4 Indent': 4
        })
      })
    },
    example: (props) => (
      <TreeViewListItem
        isSelected={props.isSelected}
        isExpanded={props.isExpanded}
        expandable={props.expandable}
        text={props.text.text}
        icon={props.icon.icon}
        actions={props.actions.actions}
        hasCheck={props.hasCheck.hasCheck}
        hasBadge={props.hasBadge.hasBadge}
        active={props.active.active}
        content={props.content.content}
        useGuideLine={props.useGuideLine.useGuideLine}
        useLastGuideLine={props.useLastGuideLine.useLastGuideLine}
        expandable={props.showCaret.showCaret}
        inset={props.inset.inset}
        indent={props.indent.indent}
      />
    )
  }
);
