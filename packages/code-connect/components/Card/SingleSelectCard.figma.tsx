import figma from '@figma/code-connect';
import { Card } from '@patternfly/react-core';

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
      // Documentation for Card can be found at https://www.patternfly.org/components/card
      <Card isSelectable={true} isSelected={props.isSelected} isDisabled={props.isDisabled} isCompact={props.isCompact}>
        {props.children}
      </Card>
    )
  }
);
