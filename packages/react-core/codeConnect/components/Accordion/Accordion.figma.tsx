import { Accordion } from '@patternfly/react-core/dist/js/components/Accordion';
import figma from '@figma/code-connect';

figma.connect(
  Accordion,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2621-623&m=dev',
  {
    props: {
      // Type variants
      type: figma.enum(
        'Type',
        {
          Default: 'default',
          Bordered: { isBordered: true }
        },
        'Default'
      ),

      // Caret/toggle position
      caretPosition: figma.enum(
        'Caret position',
        {
          Right: 'end',
          Left: 'start'
        },
        'Right'
      )
    },
    example: (props) => {
      // Extract values from type variant
      const isBordered = props.type === 'Bordered' || (props.type && props.type.isBordered);

      return (
        <Accordion isBordered={isBordered} togglePosition={props.caretPosition} aria-label="Accordion example">
          <div>Accordion item</div>
          <div>Accordion item</div>
          <div>Accordion item</div>
        </Accordion>
      );
    }
  }
);
