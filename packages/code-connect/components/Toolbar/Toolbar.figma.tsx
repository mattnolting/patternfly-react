import figma from '@figma/code-connect';
import { Toolbar, ToolbarGroup } from '@patternfly/react-core';

// Documentation for Toolbar can be found at https://www.patternfly.org/components/toolbar

figma.connect(
  Toolbar,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=8062-17157',
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
      hasNoBackground: figma.boolean('Transparent Background', {
        true: 'no-background',
        false: undefined
      }),

      children: figma.children('*')
    },
    example: (props) => (
      <Toolbar id="toolbar-example" colorVariant={props.hasNoBackground}>
        <ToolbarGroup>{props.children}</ToolbarGroup>
      </Toolbar>
    )
  }
);
