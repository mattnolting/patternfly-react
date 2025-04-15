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
      toggleText: figma.string('Toggle Text', 'Accordion item'),
      type: figma.enum('Type', {
        Regular: 'regular',
        'Large Bordered': 'large-bordered',
        Bordered: 'bordered'
      }),
      state: figma.enum('State', {
        Expanded: 'expanded'
      }),
      togglePosition: figma.enum('Caret position', {
        Right: 'right',
        Left: 'left'
      }),
      component: figma.enum('Type', {
        'Large Bordered': 'h3',
        Regular: 'h4',
        Bordered: 'h4'
      }),
      isExpanded: figma.enum('State', {
        Expanded: true,
        Default: false,
        Hover: false
      })
    },
    example: (props) => (
      <AccordionToggle
        type={props.type}
        state={props.state}
        togglePosition={props.togglePosition}
        component={props.component}
      >
        Accordion item
      </AccordionToggle>
    )
  }
);
