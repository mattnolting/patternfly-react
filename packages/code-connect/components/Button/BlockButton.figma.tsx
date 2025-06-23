import figma from '@figma/code-connect';
import { Button } from '@patternfly/react-core';

// TODO: FIGMA: Define Icon left/right intent
// Ex: Are the icons different or just on different sides?
// The current configuration renders two icons separately
// Documentation for Button can be found at https://www.patternfly.org/components/button

figma.connect(
  Button,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1259-800&t=TMTA4Fpy1ljK4qQP-11',
  {
    props: {
      // string
      text: figma.string('Text'),

      // boolean
      isClicked: figma.enum('State', { Clicked: true }),
      isDisabled: figma.enum('State', { Disabled: true })
    },
    example: (props) => (
      <Button isClicked={props.isClicked} isDisabled={props.isDisabled} isBlock icon={() => {}}>
        {props.text}
      </Button>
    )
  }
);
