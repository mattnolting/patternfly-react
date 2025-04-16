import figma from '@figma/code-connect';
import { MenuItem } from './MenuItem';

/**
 * PatternFly MenuItem integration for Figma Code Connect
 */

figma.connect(
  MenuItem,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2579-17546&m=dev',
  {
    props: {
      showLeadingIcon: figma.boolean('Show Leading Icon'),
      showDescr: figma.boolean('Show Descr. '),
      descrText: figma.string('Descr. Text', 'This is a description'),
      showActionIcon: figma.boolean('Show action icon'),
      menuItemText: figma.string('Menu item Text', 'Menu item'),
      menuItem: figma.enum('Menu Item', {
        Basic: 'basic',
        'Checkbox select': 'checkbox-select',
        'Option Select': 'option-select',
        Danger: 'danger',
        'With external link on hover': 'with-external-link-on-hover',
        'Drill Down - Breadcrumb': 'drill-down---breadcrumb',
        'Drill Down - Start': 'drill-down---start',
        'Drill Down - Return': 'drill-down---return',
        'Group Header': 'group-header',
        Separator: 'separator',
        Footer: 'footer'
      }),
      state: figma.enum('State', {
        Default: 'default',
        Hover: 'hover',
        Selected: 'selected',
        Disabled: 'disabled'
      })
    },
    example: (props) => (
      <MenuItem
        showLeadingIcon={props.showLeadingIcon}
        showActionIcon={props.showActionIcon}
        description={props.descrText}
        menuItemText={props.menuItemText}
        menuItem={props.menuItem}
        state={props.state}
      />
    )
  }
);
