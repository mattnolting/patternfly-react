import figma from '@figma/code-connect';
import { AccordionToggle } from '@patternfly/react-core';

/**
 * PatternFly AccordionToggle component integration for Figma Code Connect
 */

figma.connect(
  AccordionToggle,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1423-687&m=dev',
  {
    props: {
      // Map toggle text with priority based on state and type
      toggleText: figma.string('Toggle Text', 'Accordion toggle'),

      // Map component type based on Type enum
      component: figma.enum('Type', {
        'Large Bordered': 'h3'
        // Regular and Bordered will be undefined, defaulting to h4
      }),

      // Map isExpanded directly from State enum
      isExpanded: figma.enum('State', {
        'Expanded': true
        // Default and Hover will be undefined (falsy)
      }),

      // Map togglePosition directly from Caret position
      togglePosition: figma.enum('Caret position', {
        Right: 'right',
        Left: 'left'
      })
    },
    example: (props) => (
      <AccordionToggle
        id="accordion-toggle-example"
        isExpanded={props.isExpanded}
        togglePosition={props.togglePosition}
        component={props.component || 'h4'}
      >
        {props.toggleText}
      </AccordionToggle>
    )
  }
);
