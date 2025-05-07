import figma from '@figma/code-connect';
import { InlineEditToggle } from '@patternfly/react-core';

/**
 * PatternFly InlineEditToggle component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/inline-edit#toggle
 */

figma.connect(
  InlineEditToggle,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1664-8905&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      // enum
      type: figma.enum('Type', {
        'Field specific': 'field-specific',
        'Section toggle': 'section-toggle',
        Table: 'table'
      }),

      // string
      label: figma.string('Label')
    },
    example: (props) => <InlineEditToggle aria-label="Toggle edit mode" />
  }
);
