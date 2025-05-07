import figma from '@figma/code-connect';
import { ToggleGroupItem } from '@patternfly/react-core';

/**
 * PatternFly Toggle Group Parts integration for Figma Code Connect
 */

figma.connect(
  ToggleGroupItem,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2089-5606&m=dev',
  {
    props: {
      // string
      text: figma.string('Text'),

      // boolean
      hasIcon: figma.boolean('Has icon'),
      hasText: figma.boolean('Has text'),
      isDisabled: figma.enum('State', {
        Disabled: true,
        Default: false,
        Hover: false,
        Selected: false
      }),
      isSelected: figma.enum('State', {
        Selected: true,
        Default: false,
        Hover: false,
        Disabled: false
      }),

      // enum
      buttonVariant: figma.enum('Position', {
        Left: 'left',
        Middle: 'middle',
        RIght: 'right'
      }),
      isCompact: figma.enum('Size', {
        Default: false,
        Compact: true
      })
    },
    example: (props) => (
      <ToggleGroupItem
        buttonVariant={props.buttonVariant}
        hasIcon={props.hasIcon}
        hasText={props.hasText}
        isCompact={props.isCompact}
        isDisabled={props.isDisabled}
        isSelected={props.isSelected}
        text={props.text}
      />
    )
  }
);
