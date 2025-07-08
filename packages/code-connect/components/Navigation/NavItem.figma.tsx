import figma from '@figma/code-connect';
import { NavExpandable, NavItem } from '@patternfly/react-core';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';

// Documentation for NavItem can be found at https://www.patternfly.org/components/nav

const expandableNavItem = {
  // string
  groupId: '<group-id',
  title: figma.textContent('Nav item'),

  // enum
  isActive: figma.enum('State', { Selected: true }),

  // reset inherited isActive prop
  navItemIsActive: figma.enum('State', {
    Selected: {
      true: undefined,
      false: undefined
    }
  }),

  children: figma.children('Subnav item')
};

figma.connect(
  NavItem,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2104-7119&m=dev',
  {
    variant: { Type: 'Expandable - Closed' },
    props: {
      ...expandableNavItem
    },
    example: ({ groupId, title, isActive }) => (
      <NavExpandable title={title} groupId={groupId} isActive={isActive}>
        <NavItem>Nav item</NavItem>
        <NavItem>Nav item</NavItem>
        <NavItem>Nav item</NavItem>
        <NavItem>Nav item</NavItem>
      </NavExpandable>
    )
  }
);

figma.connect(
  NavItem,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2104-7119&m=dev',
  {
    variant: { Type: 'Expandable - Open' },
    props: {
      ...expandableNavItem
    },
    example: ({ groupId, title, isActive, children }) => (
      <NavExpandable title={title} groupId={groupId} isActive={isActive} isExpanded>
        {children}
      </NavExpandable>
    )
  }
);

figma.connect(
  NavItem,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2104-7119&m=dev',
  {
    props: {
      // string
      navItemText: figma.textContent('Nav item'),

      // boolean
      hasIcon: figma.boolean('Has Icon', {
        true: <CubeIcon />,
        false: undefined
      }),
      isExpandable: figma.enum('Type', {
        'Expandable - Open': true,
        'Expandable - Closed': true
      }),

      // enum
      isActive: figma.enum('State', { Selected: true })
    },
    example: (props) => (
      <NavItem icon={props.hasIcon} isActive={props.isActive} isExpandable={props.isExpandable}>
        {props.navItemText}
      </NavItem>
    )
  }
);
