import figma from '@figma/code-connect';
import { Checkbox } from '@patternfly/react-core';

/**
 * PatternFly Checkbox component integration for Figma Code Connect
 *
 * This file maps Figma properties to the PatternFly Checkbox component,
 * allowing designers to generate React code directly from Figma's Dev Mode.
 *
 * @see https://www.patternfly.org/components/checkbox
 */

figma.connect(
  Checkbox,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=157-3078&m=dev',
  {
    props: {
      state: figma.enum('State', {
        Unchecked: false,
        Hover: false,
        Checked: true,
        Mixed: 'mixed',
        'Unchecked Disabled': { isChecked: false, isDisabled: true },
        'Checked Disabled': { isChecked: true, isDisabled: true },
        'Mixed disabled': { isChecked: 'mixed', isDisabled: true }
      })
    },
    example: (props) => {
      // Extract values from the state
      let isChecked = false;
      let isDisabled = false;

      if (typeof props.state === 'object') {
        isChecked = props.state.isChecked;
        isDisabled = props.state.isDisabled;
      } else {
        isChecked = props.state;
      }

      return <Checkbox label="Checkbox label" isChecked={isChecked} isDisabled={isDisabled} />;
    }
  }
);
