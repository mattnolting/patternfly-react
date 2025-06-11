import figma from '@figma/code-connect';
import { Tr } from '@patternfly/react-table';

figma.connect(
  Tr,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2930-40632',
  {
    props: {
      showLeftControls: figma.boolean('Show left controls'),
      size: figma.enum('Size', {
        Default: 'default',
        Compact: 'compact'
      }),
      state: figma.enum('State', {
        Default: 'default',
        Hover: 'hover',
        Clicked: 'clicked'
      }),
      selected: figma.boolean('Selected'),
      bordered: figma.boolean('Bordered')
    },
    example: (props) => (
      // Documentation for Tr can be found at https://www.patternfly.org/components/table
      <Tr
        showLeftControls={props.showLeftControls}
        showActions={props.showActions}
        size={props.size}
        state={props.state}
        selected={props.selected}
        expanded={props.expanded}
        bordered={props.bordered}
        isClickable={true}
      />
    )
  }
);
