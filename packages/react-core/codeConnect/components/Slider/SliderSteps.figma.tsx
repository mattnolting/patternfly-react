import figma from '@figma/code-connect';
import { SliderStep } from '@patternfly/react-core';

/**
 * PatternFly SliderStep component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/slider#with-custom-steps
 */

figma.connect(
  SliderStep,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=3171-98999&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      // string
      label: figma.string('Label'),
      value: figma.string('Value'),

      // boolean
      isLabelHidden: figma.boolean('Is Label Hidden')
    },
    example: (props) => <SliderStep isLabelHidden={props.isLabelHidden} label={props.label} value={props.value} />
  }
);
