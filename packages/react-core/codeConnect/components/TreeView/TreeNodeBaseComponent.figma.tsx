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
      // string
      text: figma.string('Text'),

      // boolean
      defaultText: figma.boolean('Default Text'),
      endNodeGuide: figma.boolean('End Node Guide'),
      noCaretIndent: figma.boolean('No Caret Indent'),
      nodeGuide: figma.boolean('Node Guide'),
      sepSelectionText: figma.boolean('Sep. Selection Text'),
      showBadge: figma.boolean('Show Badge'),
      showCaret: figma.boolean('Show Caret'),
      withIcon: figma.boolean('With Icon'),
      withActions: figma.boolean('With Actions'),
      withCheckbox: figma.boolean('With Checkbox'),

      // object
      indent: {
        lvl1Indent: figma.boolean('Lvl 1 Indent'),
        lvl2Indent: figma.boolean('Lvl 2 Indent'),
        lvl3Indent: figma.boolean('Lvl 3 Indent'),
        lvl4Indent: figma.boolean('Lvl 4 Indent')
      },

      children: figma.children('*')
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
        indent={props.indent}
      >
        {props.children}
      </TreeViewListItem>
    )
  }
);
