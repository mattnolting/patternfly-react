import figma from '@figma/code-connect';
import { Th } from '@patternfly/react-table';

// TODO: FIGMA: Use the button component instead of a layer

figma.connect(
  Th,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=14-623&m=dev',
  {
    props: {
      isEmpty: figma.boolean('State', { true: true }),
      sort: figma.boolean('Sortable', {
        true: { onSort: () => {} },
        false: undefined
      }),
      info: figma.boolean('Show help icon', {
        true: { tooltip: 'More information' },
        false: undefined
      }),

      children: figma.children('*')
    },
    example: (props) => (
      <Th isEmpty={props.isEmpty} sort={props.sort} info={props.info}>
        {props.children}
      </Th>
    )
  }
);
