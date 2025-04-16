import figma from '@figma/code-connect';
import { Button } from '@patternfly/react-core';

/**
 * PatternFly Split Button component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/Button
 */

figma.connect(
  Button,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=3102-7154&t=TMTA4Fpy1ljK4qQP-11',
  {
    props: {
      // enums
      leftOrRight: figma.enum('Left or Right', {
        Left: 'left',
        Right: 'right'
      }),
      type: figma.enum('Type', {
        Primary: 'primary',
        Secondary: 'secondary',
        Tertiary: 'tertiary'
      }),

      // state
      isClicked: figma.enum('State', {
        Clicked: true
      }),
      isDisabled: figma.enum('State', {
        Disabled: true
      }),

      // strings
      text: figma.string('Text')
    },
    example: (props) => (
      <Button isClicked={props.isClicked} isDisabled={props.isDisabled} type={props.type} text={props.text} />
    )
  }
);
