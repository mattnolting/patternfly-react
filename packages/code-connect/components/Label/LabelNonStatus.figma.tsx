import figma from '@figma/code-connect';
import { Label } from '@patternfly/react-core';

/**
 * PatternFly Label component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/label
 */

figma.connect(
  Label,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2800-609&m=dev',
  {
    props: {
      text: figma.string('Text'),
      color: figma.enum('Color', {
        Red: 'red',
        Orange: 'orange',
        'Orange Red': 'orange-red',
        Gold: 'gold',
        Green: 'green',
        Cyan: 'cyan',
        Blue: 'blue',
        Purple: 'purple',
        Grey: 'grey'
      }),
      variant: figma.enum('Type', {
        Filled: 'filled',
        Outlined: 'outlined'
      }),
      isCompact: figma.enum('Type', {
        Compact: true
      })
    },
    example: (props) => (
      // Documentation for Label can be found at https://www.patternfly.org/components/label
      <Label
        color={props.color}
        variant={props.variant}
        isCompact={props.isCompact}
        isEditable={props.isEditable}
        isDismissable={props.isDismissable}
      >
        {props.text}
      </Label>
    )
  }
);
