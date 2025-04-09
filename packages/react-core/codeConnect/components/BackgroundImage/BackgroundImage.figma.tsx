import figma from '@figma/code-connect';
import { BackgroundImage } from '@patternfly/react-core';

/**
 * PatternFly BackgroundImage component integration for Figma Code Connect
 *
 * This file maps Figma properties to the PatternFly BackgroundImage component,
 * allowing designers to generate React code directly from Figma's Dev Mode.
 * The BackgroundImage component is used to display a background image, typically
 * for login pages, error pages, or other full-page layouts.
 *
 * @see https://www.patternfly.org/components/background-image
 */

figma.connect(
  BackgroundImage,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6%3A-Components-Test?node-id=2722-13543&m=dev',
  {
    example: () => <BackgroundImage src="/assets/images/pf-background.svg" />
  }
);
