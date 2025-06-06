import figma from '@figma/code-connect';
import { Tr } from '@patternfly/react-table';

/**
 * PatternFly Tr (Table Row) component integration for Figma Code Connect
 */

figma.connect(
  Tr,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2912-35117&m=dev',
  {
    props: {
      rightActionColumn: figma.boolean('Right action column'),
      showLeftControls: figma.boolean('Show left controls')
    },
    example: (props) => (
      // Documentation for Tr can be found at https://www.patternfly.org/components/table
      <Tr rightActionColumn={props.rightActionColumn} showLeftControls={props.showLeftControls} />
    )
  }
);
