import figma from '@figma/code-connect';
import { Card } from '@patternfly/react-core';

// TODO: FIGMA: Separate Clicked and Clickable

figma.connect(
  Card,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=21430-192144&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      // enum
      isClicked: figma.enum('State', { Clicked: true }),
      state: figma.enum('State', {
        Default: undefined,
        Hover: 'hover',
        Clicked: 'clicked'
      }),
      variant: figma.enum('Type', { Secondary: 'secondary' }),

      children: figma.children('*')
    },
    example: (props) => (
      // Documentation for Card can be found at https://www.patternfly.org/components/card
      <Card isClicked={props.isClicked} variant={props.variant}>
        {props.children}
      </Card>
    )
  }
);
