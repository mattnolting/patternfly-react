import figma from '@figma/code-connect';
import { Tr } from '@patternfly/react-table';

figma.connect(
  Tr,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2930-40632',
  {
    props: {
      isRowSelected: figma.boolean('Selected'),
      bordered: figma.boolean('Bordered'),
      isExpanded: figma.boolean('Expanded'),

      children: figma.children('*')
    },
    example: (props) => (
      <Tr
        isBorderRow={props.bordered}
        isClickable={true}
        isExpanded={props.isExpanded}
        isRowSelected={props.isRowSelected}
        onRowClick={() => {}}
      >
        {props.children}
      </Tr>
    )
  }
);
