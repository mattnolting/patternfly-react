import figma from '@figma/code-connect';
import { Button } from '@patternfly/react-core';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';

figma.connect(
  Button,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1259-678',
  {
    props: {
      // string
      buttonText: figma.string('Button text'),

      // boolean
      isDisabled: figma.enum('State', { Disabled: true }),
      variant: figma.enum('Type', {
        Primary: 'primary',
        Secondary: 'secondary',
        Tertiary: 'tertiary',
        Danger: 'danger',
        Warning: 'warning'
      })
    },
    example: (props) => (
      // Documentation for Button can be found at https://www.patternfly.org/components/button
      <Button isDisabled={props.isDisabled} variant={props.variant} icon={<CogIcon />}>
        {props.buttonText}
      </Button>
    )
  }
);
