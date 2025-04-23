import figma from '@figma/code-connect';
import { Button } from '@patternfly/react-core';

/**
 * PatternFly Button component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/Button
 */

figma.connect(
  Button,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1259-678&m=dev',
  {
    props: {
      // booleans
      iconEnd: figma.boolean('Icon right'),
      iconStart: figma.boolean('Icon left'),
      showCount: figma.boolean('Show Count'),
      text: figma.string('✏️ Text'),

      // enums
      isClicked: figma.enum('State', {
        Clicked: true
      }),
      isDisabled: figma.enum('State', {
        Disabled: true
      }),
      size: figma.enum('Size', {
        Small: 'sm',
        Default: 'md'
      }),

      // variants
      variant: figma.enum('Type', {
        Primary: 'primary',
        Secondary: 'secondary',
        Tertiary: 'tertiary',
        Danger: 'danger',
        'Secondary Danger': 'secondary-danger',
        Warning: 'warning',
        Progress: 'progress',
        'Secondary Progress': 'secondary-progress'
      })
    },
    example: (props) => (
      <Button
        icon={props.iconStart}
        isClicked={props.isClicked}
        isDisabled={props.isDisabled}
        showBadge={props.showCount}
        size={props.size}
        variant={props.variant}
        text={props.text}
      />
    )
  }
);
