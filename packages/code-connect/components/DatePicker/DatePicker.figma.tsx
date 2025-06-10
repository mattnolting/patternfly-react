import figma from '@figma/code-connect';
import { DatePicker } from '@patternfly/react-core';

figma.connect(
  DatePicker,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=7958:136841&m=dev',
  {
    props: {
      value: figma.string('Value'),
      children: figma.children('*')
    },
    example: (props) => (
      <DatePicker value={props.value} onChange={() => {}}>
        {props.children}
      </DatePicker>
    )
  }
);
