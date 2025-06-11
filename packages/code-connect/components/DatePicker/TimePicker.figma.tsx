import figma from '@figma/code-connect';
import { TimePicker } from '@patternfly/react-core';

figma.connect(
  TimePicker,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=7958-136830',
  {
    props: {
      isDisabled: figma.enum('State', { Disabled: true }),

      children: figma.children('*')
    },
    example: (props) => <TimePicker isDisabled={props.isDisabled}>{props.children}</TimePicker>
  }
);
