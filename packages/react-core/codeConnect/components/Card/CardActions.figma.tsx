import figma from '@figma/code-connect';
import { CardHeader } from '@patternfly/react-core';

/**
 * PatternFly Card Actions component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/Card
 */

figma.connect(
  CardHeader,
  'https://www.figma.com/file/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6%3A-Components-Test?node-id=3144-17097',
  {
    props: {
      selectable: figma.boolean('Selectable'),
      headerActions: figma.boolean('Header action', {
        true: figma.instance('Action swap')
      }),
      actionSwap: figma.instance('Action swap'),
      rightExpandableToggle: figma.boolean('Right Expandable Toggle', {
        true: figma.instance('Action swap')
      }),
      // children
      children: figma.children('*')
    },
    example: (props) => <CardHeader actions={props.headerActions}>{props.children}</CardHeader>
  }
);
