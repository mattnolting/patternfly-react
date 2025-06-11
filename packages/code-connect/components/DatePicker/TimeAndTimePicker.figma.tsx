import figma from '@figma/code-connect';
import { TimePicker } from '@patternfly/react-core';

figma.connect(
  TimePicker,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=7958-136824',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => <TimePicker>{props.children}</TimePicker>
  }
);
