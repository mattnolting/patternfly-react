import figma from '@figma/code-connect';
import { Tr } from '@patternfly/react-table';

figma.connect(
  Tr,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2945-48504&m=dev',
  {
    props: {
      showActions: figma.boolean('Show actions'),
      expanded: figma.boolean('Expanded')
    },
    example: (props) => (
      // Documentation for Tr can be found at https://www.patternfly.org/components/table
      <Tr showActions={props.showActions} state={props.state} expanded={props.expanded} selected={props.selected} />
    )
  }
);
