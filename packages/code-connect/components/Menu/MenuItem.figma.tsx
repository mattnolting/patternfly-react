import figma from '@figma/code-connect';
import { MenuItem } from '@patternfly/react-core';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';

// TODO: File bug with Figma CC. The description prop is not working as expected. Strings behind boolean props are working in other components, however they
// do not work here. My assumption is that prepending/appending periods to the string is causing the issue and as a matter of consistency, should not be used
// Documentation for MenuItem can be found at https://www.patternfly.org/components/menu

figma.connect(
  MenuItem,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2579-17546',
  {
    props: {
      // string
      menuItemText: figma.string('Menu item Text'),

      // boolean
      icon: figma.boolean('Show Leading Icon', {
        true: <CodeBranchIcon />,
        false: undefined
      }),
      description: 'This is a description',
      showLeadingIcon: figma.boolean('Show Leading Icon'),

      // enum
      isSelected: figma.enum('State', { Selected: true }),
      isDisabled: figma.enum('State', { Disabled: true }),
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
      })
    },
    example: (props) => (
      <MenuItem
        icon={props.icon}
        isSelected={props.isSelected}
        isDisabled={props.isDisabled}
        itemId={0}
        description={props.description}
      >
        {props.menuItemText}
      </MenuItem>
    )
  }
);
