import figma from '@figma/code-connect';
import { Card } from '@patternfly/react-core';

// TODO: DESIGN: Separate Clicked and Clickable
// Documentation for Card can be found at https://www.patternfly.org/components/card

figma.connect(
  Card,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=21430-192144&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      // enum
      isClickable: figma.enum('State', { Clicked: true }), // if a card is clicked, it is clickable
      isClicked: figma.enum('State', { Clicked: true }),
      variant: figma.enum('Type', { Secondary: 'secondary' }),

      children: figma.children('*')
    },
    example: (props) => (
      <Card isClickable={props.isClickable} isClicked={props.isClicked} variant={props.variant}>
        {props.children}
      </Card>
    )
  }
);
