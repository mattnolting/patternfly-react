import figma from '@figma/code-connect';
import { Table, Thead, Tbody, Tr, Th, Td } from '@patternfly/react-table';

/**
 * PatternFly Row-Based Table (Recommended) integration for Figma Code Connect
 *
 * This file maps Figma properties to the PatternFly Table components,
 * allowing designers to generate React code directly from Figma's Dev Mode.
 */

// Since RowBasedTableRecommended appears to be a custom component,
// we'll use Table from PatternFly as the base component
figma.connect(
  Table,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=3331-12049&m=dev',
  {
    props: {
      type: figma.enum('Type', {
        'Basic Table': 'basic-table',
        'Selectable Table': 'selectable-table',
        'Clickable & Selectable table': 'clickable---selectable-table'
      }),
      size: figma.enum('Size', {
        Default: 'default',
        Compact: 'compact'
      }),
      bordered: figma.boolean('Bordered'),
      expandable: figma.boolean('Expandable')
    },
    example: (props) => (
      <Table
        variant={props.type === 'basic-table' ? undefined : props.type}
        size={props.size}
        borders={props.bordered}
        aria-label="Row-based table example"
      >
        <Thead>
          <Tr>
            <Th>Header</Th>
            <Th>Header</Th>
            <Th>Header</Th>
            <Th>Header</Th>
            <Th>Header</Th>
            <Th>Header</Th>
            <Th>Header</Th>
            <Th>Header</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>My application</Td>
            <Td>Code branch</Td>
            <Td>Code branch</Td>
            <Td>Label</Td>
            <Td>My application</Td>
            <Td>My application</Td>
            <Td>My application</Td>
            <Td>My application</Td>
          </Tr>
          {/* Additional rows would be added here */}
        </Tbody>
      </Table>
    )
  }
);
