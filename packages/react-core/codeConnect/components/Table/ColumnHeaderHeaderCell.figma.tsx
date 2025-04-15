import figma from '@figma/code-connect';
import { ColumnHeaderHeaderCell } from './ColumnHeaderHeaderCell';

/**
 * PatternFly ColumnHeaderHeaderCell component integration for Figma Code Connect
 */

figma.connect(
  ColumnHeaderHeaderCell,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=14-623&m=dev',
  {
    props: {
      showHelpIcon: figma.boolean('Show help icon'),
      sortable: figma.boolean('Sortable'),
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
      <ColumnHeaderHeaderCell
        showHelpIcon={props.showHelpIcon}
        sortable={props.sortable}
        state={props.state}
        size={props.size}
      />
    )
  }
);
