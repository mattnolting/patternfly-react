import { AccordionToggle } from '@patternfly/react-core/dist/js/components/Accordion';
import figma from '@figma/code-connect';

figma.connect(
  AccordionToggle,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1423-687&m=dev',
  {
    props: {
      // Type dropdown
      type: figma.enum(
        'Type',
        {
          Regular: 'regular',
          Bordered: 'bordered',
          'Large Bordered': 'large-bordered'
        },
        'Regular'
      ),

      // State is an enum, not a boolean
      state: figma.enum(
        'State',
        {
          Default: 'default',
          Hover: 'hover',
          Expanded: 'expanded'
        },
        'Default'
      ),

      // Caret position
      caretPosition: figma.enum(
        'Caret position',
        {
          Right: 'right',
          Left: 'left'
        },
        'Right'
      ),

      // Toggle Text
      toggleText: figma.string('Toggle Text', 'Accordion item')
    },
    example: (props) => {
      // Determine if expanded based on state enum
      const isExpanded = props.state === 'expanded';

      // Map caret position to toggle position
      const togglePosition = props.caretPosition === 'left' ? 'start' : 'end';

      return (
        <AccordionToggle
          id="accordion-toggle-1"
          toggleText={props.toggleText}
          isExpanded={isExpanded}
          expandText="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"
          togglePosition={togglePosition}
        >
          {props.toggleText}
        </AccordionToggle>
      );
    }
  }
);
