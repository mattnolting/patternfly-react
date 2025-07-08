import figma from '@figma/code-connect';
import { NavItem } from '@patternfly/react-core';

// Documentation for NavItem can be found at https://www.patternfly.org/components/horizontal-nav-item

figma.connect(
  NavItem,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2104-7262&t=hMptQArGE2pqir6N-11',
  {
    props: {
      // string
      navItemText: figma.textContent('Nav item'),

      // enum
      isActive: figma.enum('State', { Selected: true })
    },
    example: (props) => (
      <NavItem
        preventDefault
        key="<key"
        itemId="<item-id>"
        isActive={props.isActive}
        id="<horizontal-subnav-id>"
        to="<horizontal-subnav-to>"
      >
        {props.navItemText}
      </NavItem>
    )
  }
);
