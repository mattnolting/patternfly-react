import figma from '@figma/code-connect';
import { Tr } from '@patternfly/react-table';

// Documentation for Table can be found at https://www.patternfly.org/components/table

figma.connect(
  Tr,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2945-48504',
  {
    props: {
      showActions: figma.boolean('Show actions'),
      expanded: figma.boolean('Expanded'),
      children: figma.children('*')
    },
    example: (props) => <Tr isExpanded={props.expanded}>{props.children}</Tr>
  }
);
