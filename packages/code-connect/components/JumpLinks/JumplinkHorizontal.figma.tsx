import figma from '@figma/code-connect';
import { JumpLinks, JumpLinksItem } from '@patternfly/react-core';

/**
 * PatternFly JumpLinks component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/jump-links#horizontal
 */

figma.connect(
  JumpLinks,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=5286-5330&t=IzSunfrnw18ti37Y-11',
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

      children: figma.children('*')
    },
    example: (props) => (
      <JumpLinks isHorizontal>
        <JumpLinksItem>{props.tabText}</JumpLinksItem>
        {props.children}
      </JumpLinks>
    )
  }
);
