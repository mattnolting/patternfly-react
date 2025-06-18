import figma from '@figma/code-connect';
import { Th } from '@patternfly/react-table';

// Documentation for Table can be found at https://www.patternfly.org/components/table

figma.connect(
  Th,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=6241-29618',
  {
    props: {
      // boolean
      draggable: figma.boolean('Is draggable'),
      select: figma.boolean('Select all', {
        true: {
          onSelect: () => {},
          isSelected: false
        },
        false: undefined
      }),

      children: figma.children('*')
    },
    example: (props) => (
      <Th select={props.select} draggable={props.draggable} aria-label="Row select">
        {props.children}
      </Th>
    )
  }
);
