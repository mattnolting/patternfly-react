import figma from '@figma/code-connect';
import { Button } from '@patternfly/react-core';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';

// TODO: FIGMA: Define Icon left/right intent
// Ex: Are the icons different or just on different sides?
// The current configuration renders two icons separately
// Documentation for Button can be found at https://www.patternfly.org/components/button

figma.connect(
  Button,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1259-745&t=TMTA4Fpy1ljK4qQP-11',
  {
    props: {
      // instance
      icon: <TimesIcon />, // placeholder icon

      // string
      buttonText: figma.string('Text'),

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
        variant="link"
        isClicked={props.isClicked}
        isDisabled={props.isDisabled}
        size={props.size}
        icon={props.icon}
      >
        {props.icon}
        {props.buttonText}
      </Button>
    )
  }
);
