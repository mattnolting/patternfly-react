import figma from '@figma/code-connect';
import { Card } from '@patternfly/react-core';

/**
 * PatternFly Card Actions component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/Card
 */

figma.connect(
  Card,
  'https://www.figma.com/file/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6%3A-Components-Test?node-id=3144-17097',
  {
    props: {
      isSelectable: figma.boolean('Selectable'),
      isClickable: figma.boolean('Clickable'),
      isDisabled: figma.boolean('Disabled'),

      // children
      children: figma.children('*')
    },
    example: (props) => (
      <Card isSelectable={props.isSelectable} isClickable={props.isClickable} isDisabled={props.isDisabled}>
        {props.children}
      </Card>
    )
  }
);
