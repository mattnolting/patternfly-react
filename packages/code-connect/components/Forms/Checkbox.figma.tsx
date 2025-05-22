import figma from '@figma/code-connect';
import { Checkbox } from '@patternfly/react-core';

/**
 * PatternFly Checkbox component integration for Figma Code Connect
 */

figma.connect(
  Checkbox,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=157-3078&m=dev',
  {
    props: {
      // string
      label: figma.string('✏️ Toggle label'),
      description: figma.boolean('✏️ Description text', {
        true: figma.string('✏️ Description text'),
        false: undefined
      }),

      // enum
      isDisabled: figma.enum('State', { Disabled: true }),
      labelPositionEnd: figma.enum('Label placement', { Reversed: 'end' }),

      children: figma.children('*')
    },
    example: (props) => (
      <Checkbox
        label={props.label}
        description={props.description}
        labelPosition={props.labelPositionEnd}
        isDisabled={props.isDisabled}
      >
        {props.children}
      </Checkbox>
    )
  }
);
