import figma from '@figma/code-connect';
import { Button, Menu, MenuContent, MenuFooter, MenuList } from '@patternfly/react-core';

// Documentation for Menu can be found at https://www.patternfly.org/components/menu
figma.connect(
  Menu,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2579-17546',
  {
    variant: { 'Menu Item': 'Footer' },
    props: {
      children: figma.children('*')
    },
    example: (props) => (
      <>
        <Menu>
          <MenuContent>
            <MenuList>{props.children}</MenuList>
          </MenuContent>
        </Menu>
        <MenuFooter>
          <Button variant="link" isInline>
            Action
          </Button>
        </MenuFooter>
      </>
    )
  }
);

figma.connect(
  Menu,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2590-18585',
  {
    props: {
      // boolean
      showSearchInput: figma.boolean('Show search input'),

      // enum
      isPlain: figma.enum('Menu', { 'Is plain': true }),

      menu: figma.enum('Menu', {
        // Basic: 'basic',
        // 'Plain Menu': 'plain-menu',
        'With Actions': 'with-actions',
        'With Separator': 'with-separator',
        'With Links': 'with-links',
        'With Icons': 'with-icons',
        'Titled Groups': 'titled-groups',
        'Drill Down Start': 'drill-down-start',
        'Drill Down Return': 'drill-down-return',
        'Option Select': 'option-select',
        'Item Checkbox': 'item-checkbox',
        'With favorites': 'with-favorites',
        Danger: 'danger',
        'Drill Down Breadcrumbs': 'drill-down-breadcrumbs'
      }),

      children: figma.children('*')
    },

    example: (props) => (
      <Menu
        activeItemId="<activeItem>"
        onSelect={() => {}}
        isPlain={props.isPlain}
        showSearchInput={props.showSearchInput}
      >
        <MenuContent>
          <MenuList>{props.children}</MenuList>
        </MenuContent>
      </Menu>
    )
  }
);
