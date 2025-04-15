import figma from '@figma/code-connect';
import { Td } from '@patternfly/react-table';

/**
 * PatternFly Right Action Column integration for Figma Code Connect
 */

figma.connect(
  Td,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=6441-38900&m=dev',
  {
    props: {
      columnHeader: figma.boolean('Column header'),
      size: figma.enum('Size', {
        Default: 'default',
        Compact: 'compact'
      })
    },
    example: (props) => (
      <Td isActionCell={true} className="pf-v5-u-text-align-right" size={props.size}>
        <KebabToggle aria-label="Actions" />
      </Td>
    )
  }
);
