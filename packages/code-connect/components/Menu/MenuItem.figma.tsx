import figma from '@figma/code-connect';
import { MenuItem, MenuItemAction, Divider, MenuFooter, MenuBreadcrumb } from '@patternfly/react-core';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';

// TODO: File bug with Figma CC. The description prop is not working as expected. Strings behind boolean props are working in other components, however they
// do not work here. My assumption is that prepending/appending periods to the string is causing the issue and as a matter of consistency, should not be used.
// TODO: DESIGN: "Show Descr.  has a trailing space in the prop. Remove trailing space.
// doesn't but should
// description: figma.boolean('Show Descr. ', {
//   true: 'This is a description',
//   false: undefined
// }),

// Documentation for MenuItem can be found at https://www.patternfly.org/components/menu

const resetProps = {
  reset: {
    isExternalLink: undefined,
    to: undefined,
    itemId: undefined
  }
};

figma.connect(
  MenuItem,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2579-17546',
  {
    variant: { 'Menu Item': 'Separator' },
    props: {},
    example: () => <Divider />
  }
);

figma.connect(
  MenuItem,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2579-17546',
  {
    variant: { 'Menu Item': 'Drill Down - Breadcrumb' },
    props: {
      breadcrumb: figma.children('*')
    },
    example: (props) => <MenuBreadcrumb>{props.breadcrumb}</MenuBreadcrumb>
  }
);

figma.connect(
  MenuItem,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2579-17546',
  {
    variant: { 'Menu Item': 'Footer' },
    props: {
      children: figma.children('*')
    },
    example: (props) => <MenuFooter>{props.children}</MenuFooter>
  }
);

figma.connect(
  MenuItem,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2579-17546',
  {
    props: {
      ...resetProps,
      // string
      menuItemText: figma.string('Menu item Text'),

      // boolean
      actions: figma.boolean('Show action icon', {
        true: <MenuItemAction icon={<BellIcon />} actionId="alert" aria-label="Alert" />,
        false: undefined
      }),
      icon: figma.boolean('Show Leading Icon', {
        true: <CodeBranchIcon />,
        false: undefined
      }),
      isDanger: figma.enum('Menu Item', { Danger: true }),
      hasCheckbox: figma.enum('Menu Item', { 'Checkbox select': true }),
      isSelected: figma.enum('State', { Selected: true }),
      isDisabled: figma.enum('State', { Disabled: true }),

      itemId: figma.enum('Menu Item', {
        'Option Select': 'itemId={0}',
        'With external link on hover': 'itemId={0}'
      }),

      withExternalLink: figma.enum('Menu Item', {
        'With external link on hover': { isExternalLink: true, to: '#', itemId: 0 },

        // reset conditional values
        Basic: { ...resetProps },
        'Checkbox select': { ...resetProps },
        'Option Select': { ...resetProps },
        'Drill Down - Breadcrumb': { ...resetProps },
        'Drill Down - Start': { ...resetProps },
        'Drill Down - Return': { ...resetProps },
        Danger: { ...resetProps }
      })
    },
    example: (props) => (
      <MenuItem
        actions={props.actions}
        isExternalLink={props.withExternalLink.isExternalLink}
        to={props.withExternalLink.to}
        hasCheckbox={props.hasCheckbox}
        icon={props.icon}
        isDanger={props.isDanger}
        isDisabled={props.isDisabled}
        isSelected={props.isSelected}
        itemId={props.itemId}
        // description={props.description} // TODO: DESIGN: File bug with Figma CC. The description prop is not working as expected, I assume is due to api, string manipulation.
        description="This is a description."
      >
        {props.menuItemText}
      </MenuItem>
    )
  }
);
