import figma from '@figma/code-connect';
import { InlineEditAction } from '@patternfly/react-core';

/**
 * PatternFly InlineEditAction component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/inline-edit#actions
 */

figma.connect(
  InlineEditAction,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1664-5805&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      // enum
      state: figma.enum('State', {
        Default: 'default',
        Invalid: 'invalid'
      }),
      type: figma.enum('Type', {
        Buttons: 'buttons',
        Icons: 'icons'
      })
    },
    example: (props) => (
      // Documentation for InlineEditAction can be found at https://www.patternfly.org/components/inline-edit
      <InlineEditAction aria-label="Inline edit actions" />
    )
  }
);
