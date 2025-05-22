import figma from '@figma/code-connect';
import { Button } from '@patternfly/react-core';

/**
 * PatternFly Block Button component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/Button
 */

figma.connect(
  Button,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1259-800&t=TMTA4Fpy1ljK4qQP-11',
  {
    props: {
      // booleans
      hasSpinner: figma.boolean('Icon Left'),
      iconEnd: figma.boolean('Icon Right'),

      // strings
      text: figma.string('Text'),

      // state
      isClicked: figma.enum('State', {
        Clicked: true
      }),
      isDisabled: figma.enum('State', {
        Disabled: true
      }),

      children: figma.children('*')
    },
    example: (props) => (
      <Button isClicked={props.isClicked} isDisabled={props.isDisabled} isLoading={props.hasSpinner} isBlock>
        {props.text}
        {props.children}
      </Button>
    )
  }
);
