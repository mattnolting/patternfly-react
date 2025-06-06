import figma from '@figma/code-connect';
import { Th } from '@patternfly/react-table';

/**
 * PatternFly Column Header Right Action Placeholder integration for Figma Code Connect
 */

figma.connect(
  Th,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=6241-29627&m=dev',
  {
    props: {
      size: figma.enum('Size', {
        Default: 'default',
        Compact: 'compact'
      })
    },
    example: (props) => (
      // Documentation for Th can be found at https://www.patternfly.org/components/table
      <Th size={props.size} />
    )
  }
);
