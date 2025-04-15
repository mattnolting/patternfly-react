import figma from '@figma/code-connect';
import { Button } from '@patternfly/react-core';

/**
 * PatternFly Button integration for Figma Code Connect
 */

figma.connect(
  Button,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1259-678&m=dev',
  {
    props: {
      iconLeft: figma.boolean('Icon left'),
      showCount: figma.boolean('Show Count'),
      iconRight: figma.boolean('Icon right'),
      text: figma.string('✏️ Text', 'Button'),
      variant: figma.enum('Type', {
        Primary: 'primary',
        Secondary: 'secondary',
        Tertiary: 'tertiary',
        Danger: 'danger',
        'Secondary Danger': 'secondary-danger',
        Warning: 'warning',
        Progress: 'progress',
        'Secondary Progress': 'secondary-progress'
      }),
      isDisabled: figma.enum('State', {
        Disabled: true,
        Default: false,
        Hover: false,
        Clicked: false
      }),
      iconPosition: figma.enum('Icon right', {
        true: 'right',
        false: 'left'
      }),
      size: figma.enum('Size', {
        Small: 'sm',
        Default: 'md'
      })
    },
    example: (props) => (
      <Button
        variant={props.variant}
        isDisabled={props.isDisabled}
        size={props.size}
        icon={props.iconLeft}
        iconPosition={props.iconPosition}
        showBadge={props.showCount}
      >
        {props.text}
      </Button>
    )
  }
);
