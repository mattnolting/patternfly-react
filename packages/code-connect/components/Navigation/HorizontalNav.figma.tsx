import figma from '@figma/code-connect';
import { Nav } from '@patternfly/react-core';

/**
 * PatternFly Nav component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/navigation
 */

figma.connect(
  Nav,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=7514-12157&m=dev',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => <Nav>{props.children}</Nav>
  }
);
