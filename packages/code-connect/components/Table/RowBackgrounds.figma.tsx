import figma from '@figma/code-connect';
import { Tr } from '@patternfly/react-table';

figma.connect(
  Tr,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=6441-39265&t=dQvgcyu0ZKNA0TiF-11',
  {
    props: {
      // boolean
      isBordered: figma.boolean('Bordered'),

      // enum
      isClickable: figma.enum('Type', { 'Clickable + Selectable': true }),
      isRowSelected: figma.enum('State', {
        Selected: true,
        'Selected (not clicked)': true
      }),
      isSelectable: figma.enum('Type', {
        Basic: undefined,
        'Clickable + Selectable': true,
        Selectable: true
      }),

      children: figma.children('*')
    },
    example: (props) => (
      <Tr
        key="<key>"
        isBorderRow={props.isBordered}
        isClickable={props.isClickable}
        isRowSelected={props.isRowSelected}
        isSelectable={props.isSelectable}
        onRowClick={() => {}}
      >
        {props.children}
      </Tr>
    )
  }
);
