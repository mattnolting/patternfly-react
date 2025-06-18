import figma from '@figma/code-connect';
import { Card } from '@patternfly/react-core';

// Documentation for Card can be found at https://www.patternfly.org/components/card

figma.connect(
  Card,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=27155-32360',
  {
    props: {
      // boolean
      isExpandable: figma.boolean('Is expandable'),

      // enum
      isCompact: figma.enum('Size', { Compact: true }),
      isDisabled: figma.enum('State', { isDisabled: true }),
      isSelected: figma.enum('State', { Selected: true }),

      children: figma.children('*')
    },
    example: (props) => (
      <Card isCompact={props.isCompact} isDisabled={props.isDisabled} isSelectable={true} isSelected={props.isSelected}>
        {props.children}
      </Card>
    )
  }
);
