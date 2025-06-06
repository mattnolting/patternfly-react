import figma from '@figma/code-connect';
import { InlineEdit } from '@patternfly/react-core';

/**
 * PatternFly InlineEdit component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/inline-edit
 */

figma.connect(
  InlineEdit,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1664-8856&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      // boolean
      showTermLabel: figma.boolean('Show term label'),

      // enum
      state: figma.enum('State', {
        'Read only view': 'read-only-view',
        'Edit view': 'edit-view'
      }),

      // string
      labelText: figma.string('Label Text'),
      valueText: figma.string('Value Text')
    },
    example: (props) => (
      // Documentation for InlineEdit can be found at https://www.patternfly.org/components/inline-edit
      <InlineEdit
        isEditable={props.state === 'edit-view'}
        label={props.showTermLabel ? props.labelText : undefined}
        value={props.valueText}
      />
    )
  }
);
