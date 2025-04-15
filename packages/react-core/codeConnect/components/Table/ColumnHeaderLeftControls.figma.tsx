import figma from '@figma/code-connect';
import { TableComposable, Thead, Tr, Th, SelectColumn, DraggableCell } from '@patternfly/react-core';

/**
 * PatternFly ColumnHeaderLeftControls component integration for Figma Code Connect
 *
 * This file maps Figma properties to the PatternFly TableHeader controls,
 * allowing designers to generate React code directly from Figma's Dev Mode.
 *
 * @see https://www.patternfly.org/components/table
 */

figma.connect(
  TableComposable,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=6241-29618&m=dev',
  {
    props: {
      // Map size directly to variant
      variant: figma.enum('Size', {
        Default: 'default',
        Compact: 'compact'
      }),

      // Map selectAll to predefined select cell content
      selectCell: figma.enum('Select all', {
        true: <SelectColumn selectVariant="checkbox" />
      }),

      // Map expandableAll to predefined expand cell content
      expandCell: figma.enum('Expandable all', {
        true: <Th expand={true} />
      }),

      // Map isDraggable to predefined draggable cell content
      draggableCell: figma.enum('Is draggable', {
        true: <DraggableCell />
      })
    },
    example: (props) => (
      <TableComposable variant={props.variant} aria-label="Column header with left controls example">
        <Thead>
          <Tr>
            {props.selectCell}
            {props.expandCell}
            {props.draggableCell}
            <Th>Column Header 1</Th>
            <Th>Column Header 2</Th>
          </Tr>
        </Thead>
      </TableComposable>
    )
  }
);
