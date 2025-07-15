import figma from '@figma/code-connect';
import { Th } from '@patternfly/react-table';

// Documentation for Th can be found at https://www.patternfly.org/components/table

figma.connect(Th, 'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=14-623', {
  variant: { State: 'Empty' },
  props: {
    screenReaderText: 'Empty cell descriptive text'
  },
  example: (props) => <Th screenReaderText={props.screenReaderText} />
});

figma.connect(Th, 'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=14-623', {
  props: {
    info: figma.boolean('Show help icon', {
      true: { tooltip: 'More information' },
      false: undefined
    }),
    onSort: figma.boolean('Sortable', {
      true: () => {},
      false: undefined
    }),
    sortBy: figma.boolean('Sortable', {
      true: {
        index: 1,
        direction: figma.enum('State', {
          'Sorted - Ascending': 'asc',
          'Sorted - Descending': 'desc'
        })
      },
      false: undefined
    }),
    sortDirection: figma.boolean('Sortable', {
      true: figma.enum('State', {
        'Sorted - Ascending': 'asc',
        'Sorted - Descending': 'desc'
      }),
      false: undefined
    }),

    thText: 'Header'
  },
  example: (props) => (
    <Th
      info={props.info}
      sort={{
        onSort: props.onSort,
        sortBy: { index: props.sortBy.index, direction: props.sortDirection },
        columnIndex: 1
      }}
    >
      {props.thText}
    </Th>
  )
});
