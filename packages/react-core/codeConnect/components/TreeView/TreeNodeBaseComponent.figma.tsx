import figma from '@figma/code-connect';
import { TreeViewListItem } from '@patternfly/react-core';

/**
 * PatternFly TreeNodeBaseComponent integration for Figma Code Connect
 */

figma.connect(
  TreeViewListItem,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=12615-3269&m=dev',
  {
    props: {
      text: figma.string('Text', 'Tree node'),
      withIcon: figma.boolean('With Icon'),
      withActions: figma.boolean('With Actions'),
      withCheckbox: figma.boolean('With Checkbox'),
      showBadge: figma.boolean('Show Badge'),
      defaultText: figma.boolean('Default Text'),
      sepSelectionText: figma.boolean('Sep. Selection Text'),
      nodeGuide: figma.boolean('Node Guide'),
      endNodeGuide: figma.boolean('End Node Guide'),
      showCaret: figma.boolean('Show Caret'),
      noCaretIndent: figma.boolean('No Caret Indent'),
      lvl1Indent: figma.boolean('Lvl 1 Indent'),
      lvl2Indent: figma.boolean('Lvl 2 Indent'),
      lvl3Indent: figma.boolean('Lvl 3 Indent'),
      lvl4Indent: figma.boolean('Lvl 4 Indent')
    },
    example: (props) => (
      <TreeViewListItem
        text={props.text}
        icon={props.withIcon}
        actions={props.withActions}
        hasCheck={props.withCheckbox}
        hasBadge={props.showBadge}
        active={props.defaultText}
        content={props.sepSelectionText}
        useGuideLine={props.nodeGuide}
        useLastGuideLine={props.endNodeGuide}
        expandable={props.showCaret}
        inset={props.noCaretIndent}
        indent={props.lvl1Indent || props.lvl2Indent || props.lvl3Indent || props.lvl4Indent}
      />
    )
  }
);