import figma from '@figma/code-connect';
import { NavItem } from '@patternfly/react-core';

// Documentation for NavItem can be found at https://www.patternfly.org/components/nav

figma.connect(
  NavItem,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2104-7174&m=dev',
  {
    props: {
      // string
      navItemText: figma.textContent('Nav item'),

      // enum
      isExpandable: figma.enum('Expansion', {
        'Not expandable': undefined,
        'Expandable - Open': true,
        'Expandable - Closed': true
      }),

      // enum
      isActive: figma.enum('State', { Selected: true })
    },
    example: (props) => (
      <NavItem isActive={props.isActive} isExpandable={props.isExpandable}>
        {props.navItemText}
      </NavItem>
    )
  }
);
