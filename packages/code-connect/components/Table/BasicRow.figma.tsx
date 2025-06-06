import figma from '@figma/code-connect';
import { BasicRow } from '@patternfly/react-core';

/**
 * PatternFly BasicRow component integration for Figma Code Connect
 *
 * This file maps Figma properties to the PatternFly BasicRow component,
 * allowing designers to generate React code directly from Figma's Dev Mode.
 */

figma.connect(
  BasicRow,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2930-36939&m=dev',
  {
    props: {
      showLeftControls: figma.boolean('Show Left Controls'),
      showRightActions: figma.boolean('Show Right actions'),
      expanded: figma.boolean('Expanded'),
      selected: figma.boolean('Selected'),
      bordered: figma.boolean('Bordered'),
      rowStripe: figma.boolean('Row stripe'),
      size: figma.enum('Size', {
        Default: 'default',
        Compact: 'compact'
      }),
      // Default content for the row
      cells: ['My application']
    },
    example: (props) => (
      // Documentation for BasicRow can be found at https://www.patternfly.org/components/table
      <BasicRow
        showLeftControls={props.showLeftControls}
        showRightActions={props.showRightActions}
        expanded={props.expanded}
        selected={props.selected}
        bordered={props.bordered}
        rowStripe={props.rowStripe}
        size={props.size}
        cells={props.cells}
      />
    )
  }
);
