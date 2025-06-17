import figma from '@figma/code-connect';
import { Checkbox } from '@patternfly/react-core';

figma.connect(
  Checkbox,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=157-3078&m=dev',
  {
    props: {
      // string
      toggleLabel: figma.string('✏️ Toggle label'),

      // boolean
      description: figma.boolean('Description', {
        true: figma.string('✏️ Description'),
        false: undefined
      }),

      // enum
      ariaLabel: figma.enum('Type', { Standalone: 'standalone' }),
      labelPlacement: figma.enum('Label placement', { Reversed: 'start' }),
      isDisabled: figma.enum('State', { Default: true })
    },
    example: (props) => (
      // Documentation for Checkbox can be found at https://www.patternfly.org/components/forms/checkbox
      <Checkbox
        aria-label={props.ariaLabel}
        description={props.description}
        id="check1"
        isChecked={() => {}}
        isDisabled={props.isDisabled}
        labelPosition={props.labelPlacement}
        label={props.toggleLabel}
        name="check1"
        onChange={() => {}}
      />
    )
  }
);
