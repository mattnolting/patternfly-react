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
    sort: figma.boolean('Sortable', {
      true: () => {},
      false: undefined
    }),
    sortBy: figma.enum('State', {
      'Sorted - Ascending': { direction: 'asc' },
      'Sorted - Descending': { direction: 'desc' }
    }),

    // enum
    isEmpty: figma.enum('State', { Empty: true }),

    // children
    thText: figma.textContent('Header'),
    children: figma.children('*')
  },
  example: (props) => (
    <Th
      isEmpty={props.isEmpty}
      info={props.info}
      sort={props.sort}
      sortBy={{
        direction: props.sortBy.direction,
        index: 1
      }}
    >
      {props.thText}
    </Th>
  )
});
