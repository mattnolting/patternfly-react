import figma from '@figma/code-connect';
import { DrawerHeader } from '@patternfly/react-core';

/**
 * PatternFly DrawerHeader component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/drawer
 */

figma.connect(
  DrawerHeader,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=35627-47590&m=dev',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => <DrawerHeader>{props.children}</DrawerHeader>
  }
);
