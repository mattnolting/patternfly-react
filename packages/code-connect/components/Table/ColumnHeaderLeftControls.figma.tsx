import figma from '@figma/code-connect';
import { Th } from '@patternfly/react-table';

figma.connect(
  Th,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=6241-29618',
  {
    props: {
      isDraggable: figma.boolean('Is draggable'),
      selectAll: figma.boolean('Select all')
    },
    example: (props) => (
      // Documentation for Th can be found at https://www.patternfly.org/components/table
      <Th
        isDraggable={props.isDraggable}
        expandableAll={props.expandableAll}
        selectAll={props.selectAll}
        size={props.size}
      />
    )
  }
);
