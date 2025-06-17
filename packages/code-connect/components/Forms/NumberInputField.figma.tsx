import { NumberInput } from '@patternfly/react-core';
import figma from '@figma/code-connect';

figma.connect(
  NumberInput,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=176-3706&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      unit: figma.string('Unit'),

      // enum
      isDisabled: figma.enum('Status', { Disabled: true }),
      validated: figma.enum('Status', {
        Warning: 'warning',
        Error: 'error',
        Success: 'success'
      })
    },
    example: (props) => (
      // Documentation for NumberInput can be found at https://www.patternfly.org/components/number-input
      <NumberInput
        isDisabled={props.isDisabled}
        inputName="input"
        inputAriaLabel="number input"
        minusBtnAriaLabel="minus"
        onMinus={() => {}}
        onChange={() => {}}
        onPlus={() => {}}
        plusBtnAriaLabel="plus"
        unit={props.unit}
        value={90}
        validated={props.validated}
      />
    )
  }
);
