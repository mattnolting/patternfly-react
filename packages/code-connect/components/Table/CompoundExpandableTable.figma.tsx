import figma from '@figma/code-connect';
import { Table } from '@patternfly/react-table';

// Documentation for Table can be found at https://www.patternfly.org/components/table

figma.connect(
  Table,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=6482-55919',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => (
      // Documentation for Table can be found at https://www.patternfly.org/components/table
      <Table aria-label="Compound expandable table example">{props.children}</Table>
    )
  }
);
