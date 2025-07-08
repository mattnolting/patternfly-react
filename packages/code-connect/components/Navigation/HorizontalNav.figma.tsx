import figma from '@figma/code-connect';
import { Nav } from '@patternfly/react-core';

// Documentation for Nav can be found at https://www.patternfly.org/components/navigation

figma.connect(
  Nav,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=7514-12157',
  {
    props: {
      isSubnav: figma.enum('Type', { Subnav: true }),
      children: figma.children(['Horizontal Subnav item', 'Horizontal Nav item'])
    },
    example: (props) => (
      <Nav isHorizontal aria-label="Horizontal subnav">
        {props.children}
      </Nav>
    )
  }
);
