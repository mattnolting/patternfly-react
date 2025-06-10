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
      isRowSelected: figma.enum('State', {
        Default: undefined,
        Selected: true,
        'Selected (not clicked)': true
      }),
      isSelectable: figma.enum('Type', {
        Basic: undefined,
        'Clickable + Selectable': true,
        Selectable: true
      })
    },
    example: (props) => (
      // Documentation for Tr can be found at https://www.patternfly.org/components/table
      <Tr isRowSelected={props.isRowSelected} isSelectable={props.isSelectable} isBorderRow={props.isBordered} />
    )
  }
);
