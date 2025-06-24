import figma from '@figma/code-connect';
import { Menu } from '@patternfly/react-core';

// Documentation for Menu can be found at https://www.patternfly.org/components/menu

figma.connect(
  Menu,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2590-18585',
  {
    props: {
      showSearchInput: figma.boolean('Show search input'),
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
      })
    },
    example: (props) => (
      <Menu
        activeItemId="<activeItem>"
        onSelect={() => {}}
        isPlain={props.isPlain}
        showSearchInput={props.showSearchInput}
      />
    )
  }
);
