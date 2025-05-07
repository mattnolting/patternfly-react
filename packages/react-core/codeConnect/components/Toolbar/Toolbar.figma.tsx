import figma from '@figma/code-connect';
import { Toolbar, ToolbarContent, ToolbarItem } from '@patternfly/react-core';

/**
 * PatternFly Toolbar component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/toolbar
 */

figma.connect(
  Toolbar,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=8062-17157&m=dev',
  {
    props: {
      // boolean
      bulkSelector: figma.boolean('Bulk Selector'),
      buttonGroup: figma.boolean('Button group'),
      filterChips: figma.boolean('Filter chips'),
      filterGroup: figma.boolean('Filter group'),
      iconButtonGroup: figma.boolean('Icon button group'),
      linkButtons: figma.boolean('Link buttons'),
      overflowMenu: figma.boolean('Overflow menu'),
      pagination: figma.boolean('Pagination'),
      searchFilter: figma.boolean('Search filter'),
      transparentBackground: figma.boolean('Transparent Background'),
      verticalDivider: figma.boolean('Vertical divider'),

      children: figma.children('*')
    },
    example: (props) => (
      <Toolbar id="toolbar-example" inset={{ default: 'insetNone' }}>
        <ToolbarContent>{props.children}</ToolbarContent>
      </Toolbar>
    )
  }
);
