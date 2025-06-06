import { NumberInput } from '@patternfly/react-core';
import figma from '@figma/code-connect';

figma.connect(
  NumberInput,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=176-3706&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      rightUnit: figma.boolean('Right unit'),
      leftUnit: figma.boolean('Left unit'),
      unit: figma.string('Unit'),
      type: figma.enum('Type', {
        Default: 'default',
        'With Unit': 'with-unit'
      }),
      status: figma.enum('Status', {
        Default: 'default',
        Warning: 'warning',
        Error: 'error',
        Success: 'success',
        Disabled: 'disabled'
      })
    },
    example: (props) => (
      // Documentation for NumberInput can be found at https://www.patternfly.org/components/number-input
      <NumberInput />
    )
  }
);
