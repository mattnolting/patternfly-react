import figma from '@figma/code-connect';
import { Button, CardActions } from '@patternfly/react-core';

/**
 * PatternFly Card Actions component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/Card
 */

figma.connect(
  CardActions,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=3144-17097&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      // headerAction: figma.boolean('Header action', {
      //   true: <Button isControl />
      // }),
      selectable: figma.boolean('Selectable'),
      headerActions: figma.boolean('Header action', {
        true: figma.instance('Action swap')
      }),
      actionSwap: figma.instance('Action swap'),
      rightExpandableToggle: figma.boolean('Right Expandable Toggle', {
        true: figma.instance('Action swap')
      }),
      // cardType: figma.enum('Card Type', {
      //   Basic: <Button isControl />,
      //   'Selectable - Multiselect': 'selectable-multiselect',
      //   'Right expandable': 'right-expandable',
      //   'Selectable - Single select': 'selectable-single-select',
      //   'Clickable + Selectable': 'clickable-selectable'
      // }),
      cartType: figma.enum('Card Type', {
        Basic: figma.boolean('Basic', { true: <Button isControl >clse</Button> })
      }),
      // children
      children: figma.children('*')
    },
    example: (props) => (
      <CardACtions>
        {props.headerActions}
        {props.children}
      </CardACtions>
    )
  }
);
