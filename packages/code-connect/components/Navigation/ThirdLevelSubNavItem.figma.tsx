import figma from '@figma/code-connect';
import { NavItem } from '@patternfly/react-core';

/**
 * PatternFly NavItem component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/navigation
 */

figma.connect(
  NavItem,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2104-7254&m=dev',
  {
    props: {
      isActive: figma.boolean('State', {
        Selected: true,
        Default: false
      })
    },
    example: (props) => <NavItem isActive={props.isActive}>Nav Item</NavItem>
  }
);
