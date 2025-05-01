import figma from '@figma/code-connect';
import { BackgroundImage } from '@patternfly/react-core';

/**
 * PatternFly BackgroundImage component integration for Figma Code Connect
 */

figma.connect(
  BackgroundImage,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6%3A-Components-Test?node-id=2722-13543&m=dev',
  {
    example: () => <BackgroundImage src="/assets/images/pf-background.svg" />
  }
);
