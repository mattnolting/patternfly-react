import figma from '@figma/code-connect';
import { Checkbox } from '@patternfly/react-core';

/**
 * PatternFly Checkbox component integration for Figma Code Connect
 * @pf https://www.patternfly.org/components/forms/checkbox
 * @figma figma component url
 */

figma.connect(
  Checkbox,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=157-3078',
  {
    props: {
      // string
      label: figma.string('✏️ Toggle label'),

      // boolean returning string
      description: figma.boolean('Description text', {
        true: figma.string('✏️ Description text'),
        false: undefined
      }),

      // enum
      labelPosition: figma.enum('Label placement', { Reversed: 'end' }),
      isDisabled: figma.enum('State', { Disabled: true })
    },
    example: (props) => (
      <Checkbox
        label={props.label}
        description={props.description}
        labelPosition={props.labelPosition}
        isDisabled={props.isDisabled}
      />
    )
  }
);
