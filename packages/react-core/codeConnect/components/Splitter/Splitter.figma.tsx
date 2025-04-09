import figma from '@figma/code-connect';
import { Splitter } from '@patternfly/react-core';

/**
 * PatternFly Splitter integration for Figma Code Connect
 */

figma.connect(
  Splitter,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=8034-8230&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      type: figma.enum('Type', {
        Inline: 'inline',
        Overlay: 'overlay'
      })
    },
    example: (props) => <Splitter variant={props.type} />
  }
);
