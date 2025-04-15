import figma from '@figma/code-connect';
import { Tr } from '@patternfly/react-table';

/**
 * PatternFly Compound Expandable Rows integration for Figma Code Connect
 */

figma.connect(
  Tr,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2945-48504&m=dev',
  {
    props: {
      showActions: figma.boolean('Show actions'),
      state: figma.enum('State', {
        Default: 'default',
        Hover: 'hover'
      }),
      expanded: figma.boolean('Expanded'),
      selected: figma.enum('Selected', {
        False: 'false'
      })
    },
    example: (props) => (
      <Tr showActions={props.showActions} state={props.state} expanded={props.expanded} selected={props.selected} />
    )
  }
);
