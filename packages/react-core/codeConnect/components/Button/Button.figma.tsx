import figma from '@figma/code-connect';
import { Button } from '@patternfly/react-core';

/**
 * PatternFly Button component integration for Figma Code Connect
 */

/**
 * TODO: Convert to variants, rather than dedicated components (Button, Icon Button, Link Button, Inline link, CTA Button, Block Button, Split Button Components, Stateful Button)
 * TODO: Consolidate all dedicated components
 */

figma.connect(
  Button,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1259-678&m=dev',
  {
    props: {
      // booleans
      iconStart: figma.boolean('Icon left', {
        true: figma.children('IconWrapper')
      }),
      iconEnd: figma.boolean('Icon right', {
        true: figma.children('IconWrapper')
      }),
      showCount: figma.boolean('Show Count'),
      buttonText: figma.string('Button text'),

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
      }),
      children: figma.children('*')
    },
    example: (props) => (
      <Button isClicked={props.isClicked} isDisabled={props.isDisabled} size={props.size} variant={props.variant}>
        {props.iconStart}
        {props.buttonText}
        {props.iconEnd}
      </Button>
    )
  }
);
