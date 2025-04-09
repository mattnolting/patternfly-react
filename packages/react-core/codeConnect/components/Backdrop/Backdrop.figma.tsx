import figma from '@figma/code-connect';
import { Backdrop } from '@patternfly/react-core';

/**
 * PatternFly Backdrop component integration for Figma Code Connect
 *
 * This file maps Figma properties to the PatternFly Backdrop component,
 * allowing designers to generate React code directly from Figma's Dev Mode.
 * The Backdrop component creates a backdrop behind elements like modals and drawers.
 *
 * @see https://www.patternfly.org/components/backdrop
 */

figma.connect(
  Backdrop,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6%3A-Components-Test?node-id=2873-2900&m=dev',
  {
    example: () => <Backdrop />
  }
);
