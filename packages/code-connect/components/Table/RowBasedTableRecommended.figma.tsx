import figma from '@figma/code-connect';
import { Table } from '@patternfly/react-table';

figma.connect(
  Table,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=3331-12049',
  {
    props: {
      // boolean
      bordered: figma.boolean('Bordered'),
      expandable: figma.boolean('Expandable'),

      // enum
      isClickable: figma.enum('Type', { 'Clickable & Selectable table': true }),
      isSelectable: figma.enum('Type', {
        'Selectable Table': true,
        'Clickable & Selectable table': true
      }),
      variant: figma.enum('Size', { Compact: 'compact' }),

      children: figma.children('*')
    },
    example: (props) => (
      // Documentation for Table can be found at https://www.patternfly.org/components/table
      <Table variant={props.variant} borders={props.bordered} aria-label="Table example">
        {props.children}
      </Table>
    )
  }
);
