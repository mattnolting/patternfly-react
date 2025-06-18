import figma from '@figma/code-connect';
import { Card } from '@patternfly/react-core';

// Documentation for Card can be found at https://www.patternfly.org/components/card

figma.connect(
  Card,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=3144-18665',
  {
    props: {
      // enum
      isCompact: figma.enum('Size', { Compact: true }),
      isLarge: figma.enum('Size', { Large: true }),
      isPlain: figma.enum('Style', { Plain: true }),
      variant: figma.enum('Style', { Secondary: 'secondary' }),

      children: figma.children('*')
    },
    example: (props) => (
      <Card isCompact={props.isCompact} isLarge={props.isLarge} isPlain={props.isPlain} variant={props.variant}>
        {props.children}
      </Card>
    )
  }
);
