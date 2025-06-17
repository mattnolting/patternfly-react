import figma from '@figma/code-connect';
import { Tr } from '@patternfly/react-table';

figma.connect(
  Tr,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=21288-130668',
  {
    props: {
      // boolean
      isSelected: figma.boolean('Selected'),
      isBorderRow: figma.boolean('Bordered'),

      children: figma.children('*')
    },
    example: (props) => (
      <Tr isRowSelected={props.isSelected} isBorderRow={props.isBorderRow} key={0}>
        {props.children}
      </Tr>
    )
  }
);
