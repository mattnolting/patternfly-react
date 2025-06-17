import figma from '@figma/code-connect';
import { Td } from '@patternfly/react-table';

figma.connect(
  Td,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=14-389&m=dev',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => <Td>{props.children}</Td>
  }
);
