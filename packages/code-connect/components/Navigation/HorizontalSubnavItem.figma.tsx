import figma from '@figma/code-connect';
import { NavItem } from '@patternfly/react-core';

// Documentation for NavItem can be found at https://www.patternfly.org/components/nav

figma.connect(
  NavItem,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2104-7269&t=hMptQArGE2pqir6N-11',
  {
    props: {
      navItemText: figma.textContent('Nav item')
    },
    example: (props) => <NavItem>{props.navItemText}</NavItem>
  }
);
