import figma from '@figma/code-connect';
import { Tr } from '@patternfly/react-table';

// TODO: DESIGN: Define "Show Left/Right Actions/Controls"
// TODO: DESIGN: Configure isSelectable, currently does not exist
// Show left actions should be 'Expandable'
// Show right actions should be an action cell
// Documentation for Table can be found at https://www.patternfly.org/components/table

figma.connect(
  Tr,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2930-36939',
  {
    props: {
      isBordered: figma.boolean('Bordered'),
      isExpandable: figma.boolean('Expanded'),
      isExpanded: figma.boolean('Expanded'),
      isRowSelected: figma.boolean('Selected'),
      isRowSelectable: figma.boolean('Selected'), // this should be its own property
      isStriped: figma.boolean('Row stripe'),

      children: figma.children('*')
    },
    example: (props) => (
      <Tr
        isExpanded={props.isExpanded}
        isStriped={props.isStriped}
        isExpandable={props.isExpandable}
        isRowSelectable={props.isRowSelectable}
        isRowSelected={props.isRowSelected}
        bordered={props.isBordered}
      >
        {props.children}
      </Tr>
    )
  }
);
