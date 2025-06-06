import figma from '@figma/code-connect';
import { Table } from '@patternfly/react-table';

/**
 * PatternFly Compound Expandable Table integration for Figma Code Connect
 */

figma.connect(
  Table,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=6482-55919&m=dev',
  {
    props: {},
    example: (props) => (
      // Documentation for Table can be found at https://www.patternfly.org/components/table
      <Table aria-label="Compound expandable table example" variant="compoundExpandable" />
    )
  }
);
