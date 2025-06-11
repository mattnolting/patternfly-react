import figma from '@figma/code-connect';
import { Th } from '@patternfly/react-table';

figma.connect(Th, 'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=14-623', {
  props: {
    showHelpIcon: figma.boolean('Show help icon'),
    state: figma.enum('State', {
      Default: 'default',
      Hover: 'hover',
      Empty: 'empty',
      'Sorted - Ascending': 'sorted-ascending',
      'Sorted - Descending': 'sorted-descending'
    }),
    size: figma.enum('Size', {
      Default: 'default',
      Compact: 'compact'
    })
  },
  example: (props) => (
    // Documentation for Th can be found at https://www.patternfly.org/components/table
    <Th showHelpIcon={props.showHelpIcon} sortable={props.sortable} state={props.state} size={props.size}>
      Header
    </Th>
  )
});
