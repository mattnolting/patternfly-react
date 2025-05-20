import figma from '@figma/code-connect';
import { Card } from '@patternfly/react-core';

/**
 * PatternFly Basic Card component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/Card
 */

figma.connect(
  Card,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=3144-18658&m=dev',
  {
    props: {
      // boolean
      // isClicked: figma.boolean('Is clicked'),
      // isClickable: figma.boolean('Is clickable'),
      // isDisabled: figma.boolean('Is disabled'),
      // isExpanded: figma.boolean('Is expanded'),
      // isSelectable: figma.boolean('Is selectable'),
      // isSelected: figma.boolean('Is selected'),

      // enum
      isCompact: figma.enum('Size', { Compact: true }),
      isLarge: figma.enum('Size', { Large: true }),
      isPlain: figma.enum('Style', { Plain: true }),
      isSecondary: figma.enum('Style', { Secondary: true }),
      variant: figma.enum('Style', { Secondary: 'secondary' }),

      children: figma.children('*')
    },
    example: (props) => (
      <Card
        variant={props.variant}
        // isClickable={props.isClickable}
        // isClicked={props.isClicked}
        // isDisabled={props.isDisabled}
        isCompact={props.isCompact}
        // isExpanded={props.isExpanded}
        isLarge={props.isLarge}
        isPlain={props.isPlain}
        // isSelectable={props.isSelectable}
        // isSelected={props.isSelected}
      >
        {props.children}
      </Card>
    )
  }
);
