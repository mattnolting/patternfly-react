import figma from '@figma/code-connect';
import { ToggleGroup, ToggleGroupItem } from '@patternfly/react-core';

/**
 * PatternFly ToggleGroup component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/toggle-group
 */

figma.connect(
  ToggleGroup,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=7644-56919&m=dev',
  {
    props: {
      // enum
      size: figma.enum('Size', {
        Default: 'default',
        Compact: 'compact'
      }),

      // nested props
      leftItem: figma.nestedProps('Base components/Toggle groups parts', {
        text: figma.string('Text', 'Option')
      }),
      middleItem1: figma.nestedProps('Base components/Toggle groups parts', {
        text: figma.string('Text', 'Option')
      }),
      middleItem2: figma.nestedProps('Base components/Toggle groups parts', {
        text: figma.string('Text', 'Option')
      }),
      rightItem: figma.nestedProps('Base components/Toggle groups parts', {
        text: figma.string('Text', 'Option')
      }),

      children: figma.children('*')
    },
    example: (props) => (
      <ToggleGroup aria-label="Toggle group example" size={props.size}>
        <ToggleGroupItem text={props.leftItem.text} buttonId="toggle-group-item-1left" />
        <ToggleGroupItem text={props.middleItem1.text} buttonId="toggle-group-item-2middle" />
        <ToggleGroupItem text={props.middleItem2.text} buttonId="toggle-group-item-3middle" />
        <ToggleGroupItem text={props.rightItem.text} buttonId="toggle-group-item-4right" />
        {props.children}
      </ToggleGroup>
    )
  }
);
