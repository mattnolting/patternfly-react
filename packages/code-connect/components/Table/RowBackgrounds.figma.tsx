import figma from '@figma/code-connect';
import { Tr } from '@patternfly/react-table';

/**
 * PatternFly Draggable Row integration for Figma Code Connect
 */

figma.connect(
  Tr,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=21288-130668&m=dev',
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
        'On Drag': 'on-drag',
        'Drag Outside': 'drag-outside'
      }),
      selected: figma.boolean('Selected'),
      bordered: figma.boolean('Bordered')
    },
    example: (props) => <Tr
      showLeftControls={props.showLeftControls}
      showActions={props.showActions}
      size={props.size}
      state={props.state}
      selected={props.selected}
      bordered={props.bordered}
      isDraggable={true}
    />
  }
);