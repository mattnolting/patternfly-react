import figma from '@figma/code-connect';
import { TableCellLeftControls } from './TableCellLeftControls';

/**
 * PatternFly TableCellLeftControls component integration for Figma Code Connect
 */

figma.connect(
  TableCellLeftControls,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2930-36766&m=dev',
  {
    props: {
      rowExpansion: figma.boolean('Row expansion'),
      isDraggable: figma.boolean('Is draggable'),
      rowSelect: figma.boolean('Row select'),
      size: figma.enum('Size', {
        Default: 'default',
        Compact: 'compact'
      })
    },
    example: (props) => (
      <TableCellLeftControls
        rowExpansion={props.rowExpansion}
        isDraggable={props.isDraggable}
        rowSelect={props.rowSelect}
        size={props.size}
      />
    )
  }
);
