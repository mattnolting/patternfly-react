import figma from '@figma/code-connect';
import { Button } from '@patternfly/react-core';

// Documentation for Button can be found at https://www.patternfly.org/components/button

figma.connect(
  Button,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2104-7278',
  {
    props: {
      isDisabled: figma.boolean('State')
    },
    example: (props) => <Button variant="plain" isDisabled={props.isDisabled} />
  }
);
