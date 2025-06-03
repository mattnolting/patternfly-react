import figma from '@figma/code-connect';
import { NavList } from '@patternfly/react-core';

/**
 * PatternFly NavList component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/navigation
 */

figma.connect(
  NavList,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2104-7233&m=dev',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => <NavList>{props.children}</NavList>
  }
);
