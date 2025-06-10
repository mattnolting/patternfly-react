import figma from '@figma/code-connect';
import { OverflowMenu } from '@patternfly/react-core';

/**
 * PatternFly OverflowMenu component integration for Figma Code Connect
 *
 * This file maps Figma properties to the PatternFly OverflowMenu component,
 * allowing designers to generate React code directly from Figma's Dev Mode.
 * Overflow menu for actions
 *
 * @see https://www.patternfly.org/components/verflowmenu
 */

figma.connect(
  OverflowMenu,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2590:18585&m=dev',
  {
    props: {
      breakpoint: figma.string('breakpoint')
    },
    example: (props) => (
      <OverflowMenu
      // TODO: Apply props based on Figma properties
      >
        {props.children}
      </OverflowMenu>
    )
  }
);
