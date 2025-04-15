import figma from '@figma/code-connect';
import { Th } from '@patternfly/react-table';

/**
 * PatternFly Column Header Left Controls integration for Figma Code Connect
 */

figma.connect(
  Th,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=6241-29618&m=dev',
  {
    props: {
      isDraggable: figma.boolean('Is draggable'),
      expandableAll: figma.boolean('Expandable all'),
      selectAll: figma.boolean('Select all'),
      size: figma.enum('Size', {
        Default: 'default',
        Compact: 'compact'
      })
    },
    example: (props) => (
      <Th
        isDraggable={props.isDraggable}
        expandableAll={props.expandableAll}
        selectAll={props.selectAll}
        size={props.size}
      />
    )
  }
);
