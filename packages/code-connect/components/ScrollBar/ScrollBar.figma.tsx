import figma from '@figma/code-connect';
import { Panel } from '@patternfly/react-core';

// Documentation for Panel can be found at https://www.patternfly.org/components/panel

figma.connect(
  Panel,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=15031-21092&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => <Panel>{props.children}</Panel>
  }
);
