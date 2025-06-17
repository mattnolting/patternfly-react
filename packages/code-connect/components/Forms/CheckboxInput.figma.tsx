import figma from '@figma/code-connect';
import { Checkbox } from '@patternfly/react-core';

figma.connect(
  Checkbox,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=157-1280&m=dev',
  {
    props: {
      isChecked: figma.enum('State', {
        Checked: true,
        'Checked Disabled': true
      }),
      isDisabled: figma.enum('State', {
        'Unchecked Disabled': true,
        'Checked Disabled': true,
        'Mixed disabled': true
      })
    },
    example: (props) => (
      // Documentation for Checkbox can be found at https://www.patternfly.org/components/forms/text-area
      <Checkbox
        id="checkbox-input-id"
        isChecked={props.isChecked}
        isDisabled={props.isDisabled}
        label="Checkbox input"
        name="check1"
        onChange={() => {}}
      />
    )
  }
);
