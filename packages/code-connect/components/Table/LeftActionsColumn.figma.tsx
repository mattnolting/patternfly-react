import figma from '@figma/code-connect';
import { Td } from '@patternfly/react-table';

figma.connect(
  Td,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=6441-38440',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => (
      <Td
        select={{
          rowIndex: 0,
          onSelect: () => {},
          isSelected: false,
          isDisabled: false
        }}
      >
        {props.children}
      </Td>
    )
  }
);
