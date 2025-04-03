import { Accordion } from 'src/components/Accordion';
import figma from '@figma/code-connect';

figma.connect(
  Accordion,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6%3A-Components-Test?node-id=2621-623&m=dev',
  {
    props: {
      // Map the Type variant to multiple component props
      typeVariant: figma.enum('Type', {
        Default: {
          isBordered: false,
          displaySize: 'default'
        },
        Bordered: {
          isBordered: true,
          displaySize: 'default'
        },
        Large: {
          isBordered: false,
          displaySize: 'lg'
        },
        'Large Bordered': {
          isBordered: true,
          displaySize: 'lg'
        }
      }),

      // Map Caret position directly to togglePosition prop
      togglePosition: figma.enum('Caret position', {
        Right: 'end',
        Left: 'start'
      })
    },
    example: (props) => (
      <Accordion
        isBordered={props.typeVariant.isBordered}
        displaySize={props.typeVariant.displaySize}
        togglePosition={props.togglePosition}
        aria-label="Accordion toggle"
      >
        {/* Example content for preview */}
        <div>Accordion content example</div>
      </Accordion>
    )
  }
);
