import { Radio } from '@patternfly/react-core';
import figma from '@figma/code-connect';

figma.connect(
  Radio,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=157-2778',
  {
    props: {
      isChecked: figma.enum('State', {
        Checked: true,
        'Checked Disabled': true
      }),
      isDisabled: figma.enum('State', {
        Disabled: true,
        'Checked Disabled': true
      }),

      children: figma.children('*')
    },
    example: (props) => (
      // Documentation for Radio can be found at https://www.patternfly.org/components/radio
      <Radio
        id="radio1"
        label="Radio input"
        name="radio1"
        isChecked={props.isChecked}
        isDisabled={props.isDisabled}
        onChange={() => {}}
      />
    )
  }
);
