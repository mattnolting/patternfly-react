import figma from '@figma/code-connect';
import { Divider } from '@patternfly/react-core';

/**
 * PatternFly Divider component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/divider
 */

figma.connect(
  Divider,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2104-7231&m=dev',
  {
    example: () => (
      // Documentation for Divider can be found at https://www.patternfly.org/components/divider
      <Divider />
    )
  }
);
