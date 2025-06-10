import figma from '@figma/code-connect';
import { Button } from '@patternfly/react-core';

figma.connect(
  Button,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1259-745&t=TMTA4Fpy1ljK4qQP-11',
  {
    props: {
      // instance
      icon: figma.children('IconWrapper'),

      // string
      buttonText: figma.string('Text'),

      // boolean
      iconStart: figma.boolean('Icon left', { true: figma.children('Spinner') }),
      iconEnd: figma.boolean('Icon right', { true: figma.children('IconWrapper') }),

      // enum
      isClicked: figma.enum('State', { Clicked: true }),
      isDisabled: figma.enum('State', { Disabled: true }),
      size: figma.enum('Size', { Small: 'sm' }),

      // enum
      variant: figma.enum('Type', {
        Primary: 'primary',
        Secondary: 'secondary',
        Tertiary: 'tertiary',
        Danger: 'danger',
        Warning: 'warning'
      }),

      children: figma.children('*')
    },
    example: (props) => (
      <Button
        isInline
        isClicked={props.isClicked}
        isDisabled={props.isDisabled}
        size={props.size}
        icon={props.icon}
        variant={props.variant}
      >
        {props.buttonText}
      </Button>
    )
  }
);
