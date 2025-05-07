import figma from '@figma/code-connect';
import { Splitter } from '@patternfly/react-core';

/**
 * PatternFly Splitter component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/splitter
 */

figma.connect(
  Splitter,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=8034-8230&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      // enum
      variant: figma.enum('Type', {
        Inline: 'inline',
        Overlay: 'overlay'
      }),

      children: figma.children('*')
    },
    example: (props) => <Splitter variant={props.variant}>{props.children}</Splitter>
  }
);
