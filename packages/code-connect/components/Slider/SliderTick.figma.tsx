import figma from '@figma/code-connect';
import { SliderTick } from '@patternfly/react-core';

/**
 * PatternFly SliderTick component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/slider#with-ticks
 */

figma.connect(
  SliderTick,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=815-212&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      // string
      number: figma.string('✏️ Number'),

      // boolean
      showNumber: figma.boolean('Show number'),

      // enum
      type: figma.enum('Type', {
        Unfilled: 'unfilled',
        Filled: 'filled',
        Disabled: 'disabled'
      })
    },
    example: (props) => (
      // Documentation for SliderTick can be found at https://www.patternfly.org/components/slider
      <SliderTick label={props.number} showLabels={props.showNumber} value={props.number} />
    )
  }
);
