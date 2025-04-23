import figma from '@figma/code-connect';
import { Accordion } from '@patternfly/react-core';

/**
 * PatternFly Accordion component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/Accordion
 */

figma.connect(
  Accordion,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2621-623&m=dev',
  {
    props: {
      // enums
      isBordered: figma.enum('Type', {
        Bordered: true,
        'Large Bordered': true
      }),
      displaySize: figma.enum('Type', {
        'Large Bordered': 'lg'
      }),
      togglePosition: figma.enum('Caret position', {
        Right: 'right',
        Left: 'left'
      }),

      // children
      children: figma.children('*')
    },
    example: (props) => (
      <Accordion isBordered={props.isBordered} displaySize={props.displaySize} togglePosition={props.togglePosition}>
        {props.children}
      </Accordion>
    )
  }
);
