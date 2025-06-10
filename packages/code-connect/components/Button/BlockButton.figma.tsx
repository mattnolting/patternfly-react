import figma from '@figma/code-connect';
import { Button } from '@patternfly/react-core';

figma.connect(
  Button,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1259-800&t=TMTA4Fpy1ljK4qQP-11',
  {
    props: {
      // boolean
      isClicked: figma.enum('State', { Clicked: true }),
      isDisabled: figma.enum('State', { Disabled: true }),

      // string
      text: figma.string('Text'),
      iconLeft: figma.string('Icon Left'),
      iconRight: figma.string('Icon Right')
    },
    example: (props) => (
      // Documentation for Button can be found at https://www.patternfly.org/components/button
      <Button isClicked={props.isClicked} isDisabled={props.isDisabled} isBlock>
        {props.iconLeft}
        {props.text}
        {props.iconRight}
      </Button>
    )
  }
);
