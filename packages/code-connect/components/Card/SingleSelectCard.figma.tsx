import figma from '@figma/code-connect';
import { Card } from '@patternfly/react-core';

/**
 * PatternFly Basic Card component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/Card
 */

figma.connect(
  Card,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=27155-32360&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      // boolean
      isClickable: figma.boolean('Is clickable'),
      isDisabled: figma.boolean('Is disabled'),
      isSelectable: figma.boolean('Is selectable'),

      // enum
      isCompact: figma.enum('Size', { Compact: true }),
      isExpandable: figma.boolean('Is expandable', { true: true }),

      children: figma.children('*')
    },
    example: (props) => (
      <Card
        isClickable={props.isClickable}
        isSelectable={props.isSelectable}
        isDisabled={props.isDisabled}
        isCompact={props.isCompact}
        isExpandable={props.isExpandable}
      >
        {props.children}
      </Card>
    )
  }
);
