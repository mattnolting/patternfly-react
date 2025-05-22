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
      // string
      buttonText: figma.string('Button text'),

      // boolean
      hasSpinner: figma.boolean('Icon Left'),
      iconEnd: figma.boolean('Icon right', { true: figma.children('IconWrapper') }),
      showCount: figma.boolean('Show Count'),

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
        'Secondary Danger': 'secondary-danger',
        Warning: 'warning',
        Progress: 'progress',
        'Secondary Progress': 'secondary-progress'
      }),

      children: figma.children('*')
    },
    example: (props) => (
      <Button
        isClicked={props.isClicked}
        isDisabled={props.isDisabled}
        size={props.size}
        isLoading={props.hasSpinner}
        variant={props.variant}
      >
        {props.buttonText}
        {/* TODO: Map badge to countOptions */}
        {props.children}
      </Button>
    )
  }
);
