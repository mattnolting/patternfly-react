import figma from '@figma/code-connect';
import { Td } from '@patternfly/react-table';

// TODO: DESIGN: Isolate select td
// TODO: DESIGN: Isolate draggable td
// TODO: DESIGN: Isolate expandable td
// Documentation for Table can be found at https://www.patternfly.org/components/table

figma.connect('https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2930-36766', {
  props: {
    draggable: figma.boolean('Is draggable'),
    rowSelect: figma.boolean('Row select', {
      true: {
        rowIndex: 1,
        onSelect: () => {},
        isSelected: () => {},
        isDisabled: () => {}
      },
      false: undefined
    }),
    isExpandable: figma.boolean('Row expansion'),
    isDraggable: figma.boolean('Is draggable'),

    children: figma.children('*')
  },
  example: (props) => (
    <>
      <Td select={props.rowSelect} aria-label="Row select">
        {props.children}
      </Td>
      <Td draggable={props.draggable} aria-label="Drag row">
        {props.children}
      </Td>
      <Td expand={props.isExpandable} draggableRow={{ id: 'draggable-row-id' }} aria-label="Expand row">
        {props.children}
      </Td>
    </>
  )
});
