import figma from '@figma/code-connect';
import { JumpLinksItem } from '@patternfly/react-core';

/**
 * PatternFly JumpLinksItem vertical component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/jump-links#vertical
 */

figma.connect(
  JumpLinksItem,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=5426-8306&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      // string
      tabText: figma.string('Tab Text'),

      // boolean
      closeIcon: figma.boolean('Close Icon'),
      hasIcon: figma.boolean('Has icon'),
      helpIcon: figma.boolean('Help icon'),

      // enum
      state: figma.enum('State', {
        Default: 'default',
        Hover: 'hover',
        Selected: 'selected'
      }),
      type: figma.enum('Type', {
        Default: 'default',
        'Subsection jumplinks': 'subsection-jumplinks'
      }),

      children: figma.children('*')
    },
    example: (props) => (
      // Documentation for JumpLinks can be found at https://www.patternfly.org/components/jump-links
      <JumpLinksItem>
        {props.tabText}
        {props.children}
      </JumpLinksItem>
    )
  }
);
