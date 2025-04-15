import figma from '@figma/code-connect';
import {
  Toolbar,
  ToolbarContent,
  ToolbarItem,
  Button,
  SearchInput,
  Pagination,
  Dropdown
} from '@patternfly/react-core';

/**
 * PatternFly Toolbar integration for Figma Code Connect
 */

figma.connect(
  Toolbar,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=8062-17157&m=dev',
  {
    props: {
      filterGroup: figma.boolean('Filter group'),
      linkButtons: figma.boolean('Link buttons'),
      pagination: figma.boolean('Pagination'),
      verticalDivider: figma.boolean('Vertical divider'),
      searchFilter: figma.boolean('Search filter'),
      bulkSelector: figma.boolean('Bulk Selector'),
      buttonGroup: figma.boolean('Button group'),
      filterChips: figma.boolean('Filter chips'),
      iconButtonGroup: figma.boolean('Icon button group'),
      overflowMenu: figma.boolean('Overflow menu'),
      transparentBackground: figma.boolean('Transparent Background')
    },
    example: (props) => (
      <Toolbar id="toolbar-example" inset={{ default: 'insetNone' }}>
        <ToolbarContent>
          <ToolbarItem>
            <BaseComponentsToggleGroupsParts text="Option" position="left" />
          </ToolbarItem>
        </ToolbarContent>
      </Toolbar>
    )
  }
);
