import figma from '@figma/code-connect';
import { Label } from '@patternfly/react-core';

// Documentation for Label can be found at https://www.patternfly.org/components/label

figma.connect(
  Label,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2800-609',
  {
    props: {
      // string
      text: figma.string('Text'),

      // boolean
      isEditable: figma.boolean('Is Editable'),

      // enum
      isCompact: figma.enum('Type', { Compact: true }),
      color: figma.enum('Color', {
        Red: 'red',
        Orange: 'orange',
        'Orange Red': 'orangered',
        Green: 'green',
        Blue: 'blue',
        Purple: 'purple',
        Grey: 'grey'
      }),
      variant: figma.enum('Type', {
        Filled: 'filled',
        Outlined: 'outline'
      })
    },
    example: (props) => (
      <Label isCompact={props.isCompact} isEditable={props.isEditable} color={props.color} variant={props.variant}>
        {props.text}
      </Label>
    )
  }
);
