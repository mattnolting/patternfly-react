import figma from '@figma/code-connect';
import { Button, Toolbar, ToolbarGroup, ToolbarItem } from '@patternfly/react-core';

// Documentation for Toolbar can be found at https://www.patternfly.org/components/toolbar

const filterGroup = (
  <ToolbarGroup>
    <ToolbarItem>
      <Button>Filter button 1</Button>
    </ToolbarItem>
    <ToolbarItem>
      <Button>Filter button 2</Button>
    </ToolbarItem>
    <ToolbarItem>
      <Button>Filter button 3</Button>
    </ToolbarItem>
  </ToolbarGroup>
);

const bulkSelector = (
  <ToolbarItem>
    <Button>test</Button>
  </ToolbarItem>
);

figma.connect(
  Toolbar,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=8062-17157',
  {
    props: {
      // boolean
      bulkSelector: figma.boolean('Bulk Selector', {
        true: bulkSelector,
        false: undefined
      }),
      buttonGroup: figma.boolean('Button group'),
      filterChips: figma.boolean('Filter chips'),

      filterGroup: figma.boolean('Filter group', {
        true: filterGroup,
        false: undefined
      }),

      iconButtonGroup: figma.boolean('Icon button group'),
      linkButtons: figma.boolean('Link buttons'),
      overflowMenu: figma.boolean('Overflow menu'),
      pagination: figma.boolean('Pagination', {
        true: figma.children('Pagination'),
        false: undefined
      }),
      searchFilter: figma.boolean('Search filter'),
      hasNoBackground: figma.boolean('Transparent Background', {
        true: 'no-background',
        false: undefined
      }),

      children: figma.children('*')
    },
    example: (props) => (
      <Toolbar id="toolbar-example" colorVariant={props.hasNoBackground}>
        {props.bulkSelector}
        {props.filterGroup}
        {props.pagination}
        {/* <ToolbarGroup>{props.children}</ToolbarGroup> */}
      </Toolbar>
    )
  }
);
