import figma from '@figma/code-connect';
import { Accordion, AccordionItem, AccordionContent, AccordionToggle } from '@patternfly/react-core';

/**
 * PatternFly Accordion component integration for Figma Code Connect
 */

figma.connect(
  Accordion,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2621-623&m=dev',
  {
    props: {
      isBordered: figma.enum('Type', {
        Bordered: true,
        'Large Bordered': true
      }),
      displaySize: figma.enum('Type', {
        'Large Bordered': 'lg'
      }),
      // Map Figma's "Caret position" directly to React prop
      togglePosition: figma.enum('Caret position', {
        Right: 'right',
        Left: 'left'
      })
    },
    example: (props) => (
      // We can compute any additional values here if needed

      <Accordion isBordered={props.isBordered} displaySize={props.displaySize} togglePosition={props.togglePosition}>
        <AccordionItem>
          <AccordionToggle id="accordion-item-1">First accordion item</AccordionToggle>
          <AccordionContent id="accordion-content-1">This is the content of the first accordion item.</AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionToggle id="accordion-item-2">Second accordion item</AccordionToggle>
          <AccordionContent id="accordion-content-2">
            This is the content of the second accordion item.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
);
