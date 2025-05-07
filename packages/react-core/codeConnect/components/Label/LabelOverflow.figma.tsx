import figma from '@figma/code-connect';
import { Label } from '@patternfly/react-core';

/**
 * PatternFly Label integration for Figma Code Connect
 */

figma.connect(
  Label,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2800-609&m=dev',
  {
    props: {
      text: figma.string('Text'),
      isEditable: figma.boolean('Is Editable'),
      isDismissable: figma.boolean('Dismissable'),
      hasIcon: figma.boolean('Has icon'),
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
      isCompact: figma.enum('Size', {
        Default: false,
        Compact: true
      })
    },
    example: (props) => (
      <Label
        color={props.color}
        variant={props.variant}
        isCompact={props.isCompact}
        isEditable={props.isEditable}
        isDismissable={props.isDismissable}
        text={props.text}
        hasIcon={props.hasIcon}
      />
    )
  }
);
