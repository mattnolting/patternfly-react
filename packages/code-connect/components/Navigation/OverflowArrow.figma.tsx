import figma from '@figma/code-connect';
import { Button } from '@patternfly/react-core';

/**
 * PatternFly Button component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/button
 */

figma.connect(
  Button,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2104-7278&m=dev',
  {
    props: {
      isDisabled: figma.boolean('State', {
        Disabled: true,
        Default: false
      })
    },
    example: (props) => (
      // Documentation for Button can be found at https://www.patternfly.org/components/button
      <Button variant="plain" isDisabled={props.isDisabled} />
    )
  }
);
