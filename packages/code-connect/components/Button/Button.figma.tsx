import figma from '@figma/code-connect';
import { Button } from '@patternfly/react-core';

/**
 * PatternFly Button component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/button
 */

figma.connect(
  Button,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1259-678&m=dev',
  {
    props: {
      buttonText: figma.string('Button text'),
      isDisabled: figma.boolean('State', {
        Disabled: true,
        Default: false
      }),
      size: figma.enum('Size', {
        Small: 'sm',
        Default: 'md'
      }),
      variant: figma.enum('Type', {
        Primary: 'primary',
        Secondary: 'secondary',
        Tertiary: 'tertiary',
        Danger: 'danger',
        Warning: 'warning'
      })
    },
    example: (props) => (
      <Button
        isDisabled={props.isDisabled}
        size={props.size}
        variant={props.variant}
      >
        {props.buttonText}
      </Button>
    )
  }
);
