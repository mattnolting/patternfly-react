import figma from '@figma/code-connect';
import { Card } from '@patternfly/react-core';

figma.connect(
  Card,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=3144-18658',
  {
    props: {
      // boolean
      isSelectable: figma.boolean('Is selectable'),
      isClickable: figma.boolean('Is clickable'),
      isDisabled: figma.boolean('Is disabled'),

      // enum
      isCompact: figma.enum('Size', { Compact: true }),
      isLarge: figma.enum('Size', { Large: true }),
      isPlain: figma.enum('Style', { Plain: true }),
      isSecondary: figma.enum('Style', { Secondary: true }),
      variant: figma.enum('Style', { Secondary: 'secondary' }),

      children: figma.children('*')
    },
    example: (props) => (
      // Documentation for Card can be found at https://www.patternfly.org/components/card
      <Card
        isCompact={props.isCompact}
        isSelectable={props.isSelectable}
        isClickable={props.isClickable}
        isDisabled={props.isDisabled}
        variant={props.variant}
        isLarge={props.isLarge}
        isPlain={props.isPlain}
      >
        {props.children}
      </Card>
    )
  }
);
