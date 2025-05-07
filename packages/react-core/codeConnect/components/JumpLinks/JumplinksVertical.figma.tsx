import figma from '@figma/code-connect';
import { JumpLinks, JumpLinksLabel } from '@patternfly/react-core';

/**
 * PatternFly JumpLinks vertical component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/jump-links#vertical
 */

figma.connect(
  JumpLinks,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=5426-8542&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      // boolean
      isExpanded: figma.boolean('Is Expanded'),
      showLabel: figma.boolean('Show Label'),

      // string
      labelText: figma.string('Label Text'),

      children: figma.children('*')
    },
    example: (props) => (
      <JumpLinks isExpanded={props.isExpanded}>
        <JumpLinksLabel>{props.labelText}</JumpLinksLabel>
        {props.children}
      </JumpLinks>
    )
  }
);
