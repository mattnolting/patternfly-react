import figma from '@figma/code-connect';
import { Tr } from '@patternfly/react-table';

figma.connect(
  Tr,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=21288-130668',
  {
    props: {
      showActions: figma.boolean('Show actions'),
      showLeftControls: figma.boolean('Show Left Controls'),
      size: figma.enum('Size', {
        Default: undefined,
        Compact: 'compact'
      }),
      state: figma.enum('State', {
        Default: undefined,
        'On Drag': 'on-drag',
        'Drag Outside': 'drag-outside'
      }),
      selected: figma.boolean('Selected'),
      bordered: figma.boolean('Bordered')
    },
    example: () => <Tr />
  }
);
