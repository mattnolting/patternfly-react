import figma from '@figma/code-connect';
import { Td } from '@patternfly/react-table';

figma.connect(
  Td,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=6441-38900',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => (
      // Documentation for Td can be found at https://www.patternfly.org/components/table
      <Td isActionCell={true}>{props.children}</Td>
    )
  }
);
