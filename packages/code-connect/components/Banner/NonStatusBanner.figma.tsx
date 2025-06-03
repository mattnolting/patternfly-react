import figma from '@figma/code-connect';
import { Banner } from '@patternfly/react-core';

/**
 * PatternFly Banner component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/banner
 */

figma.connect(
  Banner,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6%3A-Components-Test?node-id=221-1443&m=dev',
  {
    props: {
      text: figma.string('✏️ Center text'),
      color: figma.enum('Color', {
        Red: 'red',
        Orangered: 'orangered',
        Orange: 'orange',
        Gold: 'gold',
        Green: 'green',
        Cyan: 'cyan',
        Blue: 'blue',
        Purple: 'purple',
        Gray: 'gray'
      })
    },
    example: (props) => <Banner color={props.color}>{props.text}</Banner>
  }
);
