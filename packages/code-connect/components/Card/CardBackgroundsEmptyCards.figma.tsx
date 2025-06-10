import figma from '@figma/code-connect';
import { Card } from '@patternfly/react-core';

figma.connect(
  Card,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=21430-192144&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      isClickable: figma.boolean('Clickable'),
      isSelectable: figma.boolean('Selectable'),
      isDisabled: figma.boolean('Disabled'),

      state: figma.enum('State', {
        Default: 'default',
        Hover: 'hover',
        Clicked: 'clicked'
      }),
      isClicked: figma.enum('State', { Clicked: true }),
      type: figma.enum('Type', {
        Primary: 'primary',
        Secondary: 'secondary'
      }),

      children: figma.children('*')
    },
    example: (props) => (
      // Documentation for Card can be found at https://www.patternfly.org/components/card
      <Card
        isClickable={props.isClickable}
        isSelectable={props.isSelectable}
        isDisabled={props.isDisabled}
        isClicked={props.isClicked}
        type={props.type}
      >
        {props.children}
      </Card>
    )
  }
);
