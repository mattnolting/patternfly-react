import figma from '@figma/code-connect';
import { ToggleGroupItem } from '@patternfly/react-core';

/**
 * PatternFly Base Toggle Group Item integration for Figma Code Connect
 */

figma.connect(
  ToggleGroupItem,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2089-5606&m=dev',
  {
    props: {
      hasText: figma.boolean('Has text'),
      hasIcon: figma.boolean('Has icon'),
      text: figma.string('Text', 'Option'),
      position: figma.enum('Position', {
        Left: 'left',
        Middle: 'middle',
        Right: 'right'
      }),
      state: figma.enum('State', {
        Default: 'default',
        Hover: 'hover',
        Selected: 'selected',
        Disabled: 'disabled'
      }),
      size: figma.enum('Size', {
        Default: 'default',
        Compact: 'compact'
      })
    },
    example: (props) => <ToggleGroupItem text="Option" buttonId="toggle-group-item-1left" />
  }
);
