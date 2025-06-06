import figma from '@figma/code-connect';
import { Tr } from '@patternfly/react-table';

/**
 * PatternFly Clickable Row integration for Figma Code Connect
 */

figma.connect(
  Tr,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2930-40632&m=dev',
  {
    props: {
      showLeftControls: figma.boolean('Show Left Controls'),
      showActions: figma.boolean('Show actions'),
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
      expanded: figma.boolean('Expanded'),
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
