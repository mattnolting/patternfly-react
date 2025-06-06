import figma from '@figma/code-connect';
import { Menu, MenuContent } from '@patternfly/react-core';

/**
 * PatternFly Menu integration for Figma Code Connect
 */

figma.connect(
  Menu,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2590-18585&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      searchInput: figma.boolean('Show search input'),
      menuType: figma.enum('Menu', {
        Basic: 'basic',
        'Plain Menu': 'plain-menu',
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
      // Documentation for Menu can be found at https://www.patternfly.org/components/menu
      <Menu>
        <MenuContent>{props.children}</MenuContent>
      </Menu>
    )
  }
);
