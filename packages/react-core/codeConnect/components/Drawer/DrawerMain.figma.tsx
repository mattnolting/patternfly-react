import figma from '@figma/code-connect';
import { DrawerMain } from '@patternfly/react-core';

/**
 * PatternFly DrawerMain component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/drawer#drawer-sections
 */

figma.connect(
  DrawerMain,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=35586-211216&m=dev',
  {
    props: {
      // String
      className: figma.enum('Position', {
        Default: '',
        Left: 'pf-m-position-left'
      }),

      children: figma.children('*')
    },
    example: (props) => <DrawerMain className={props.className}>{props.children}</DrawerMain>
  }
);
