import figma from '@figma/code-connect';
import { Td } from '@patternfly/react-table';

/**
 * PatternFly Left Actions Column integration for Figma Code Connect
 */

figma.connect(
  Td,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=6441-38440&m=dev',
  {
    props: {
      columnHeader: figma.boolean('Column header'),
      size: figma.enum('Size', {
        Default: 'default',
        Compact: 'compact'
      })
    },
    example: (props) => <Td isActionCell={true} width={10} size={props.size} />
  }
);
