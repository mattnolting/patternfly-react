import figma from '@figma/code-connect';
import { TimePicker } from '@patternfly/react-core';

figma.connect(
  TimePicker,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=7958-136830',
  {
    props: {
      isDisabled: figma.enum('State', { Disabled: true }),

      inputValue: figma.children('Input field')
    },
    example: (props: any) => (
      // Documentation for TimePicker can be found at https://www.patternfly.org/components/time-picker
      <TimePicker time={props.inputValue} onChange={() => {}} />
    )
  }
);
