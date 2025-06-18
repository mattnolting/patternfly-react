import figma from '@figma/code-connect';
import { Card } from '@patternfly/react-core';

// Documentation for Card can be found at https://www.patternfly.org/components/card

figma.connect(
  Card,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=3144-18715',
  {
    props: {
      // enum
      isClicked: figma.enum('State', {
        Clicked: true,
        'Clicked AND Selected': true
      }),
      isCompact: figma.enum('Size', { Compact: true }),
      isDisabled: figma.enum('State', { Disabled: true }),
      isLarge: figma.enum('Size', { Large: true }),
      isPlain: figma.enum('Style', { Plain: true }),
      isSelected: figma.enum('State', {
        Selected: true,
        'Clicked AND Selected': true
      }),
      variant: figma.enum('Style', { Secondary: 'secondary' }),

      children: figma.children('*')
    },
    example: (props) => (
      <Card
        isClicked={props.isClicked}
        isCompact={props.isCompact}
        isDisabled={props.isDisabled}
        isSelected={props.isSelected}
        variant={props.variant}
        isLarge={props.isLarge}
        isPlain={props.isPlain}
      >
        {props.children}
      </Card>
    )
  }
);
