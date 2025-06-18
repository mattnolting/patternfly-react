import figma from '@figma/code-connect';
import { Button } from '@patternfly/react-core';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';

// TODO: FIGMA: Define Icon left/right intent
// Ex: Are the icons different or just on different sides?
// The current configuration renders two icons separately
// Documentation for Button can be found at https://www.patternfly.org/components/button

figma.connect(
  Button,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1259-678',
  {
    props: {
      icon: <TimesIcon />, // placeholder icon

      // string
      buttonText: figma.string('Button text'),

      // boolean
      iconPosition: figma.boolean('Icon right', {
        true: 'end',
        false: undefined
      }),

      // enum
      isDisabled: figma.enum('State', { Disabled: true }),
      size: figma.enum('Size', { Small: 'sm' }),
      variant: figma.enum('Type', {
        Primary: 'primary',
        Secondary: 'secondary',
        Tertiary: 'tertiary',
        Danger: 'danger',
        Warning: 'warning'
      }),

      badge: figma.children('Badge')
    },
    example: (props) => (
      <Button
        icon={props.icon}
        iconPosition={props.iconPosition}
        isDisabled={props.isDisabled}
        size={props.size}
        variant={props.variant}
      >
        {props.buttonText}
        {props.badge}
      </Button>
    )
  }
);
