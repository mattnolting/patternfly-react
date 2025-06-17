import figma from '@figma/code-connect';
import { CalendarMonth } from '@patternfly/react-core';

/**
 * PatternFly CalendarMonth integration for Figma Code Connect
 */
figma.connect(
  CalendarMonth,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=7741-2677&m=dev',
  {
    props: {
      date: '2025-06-16'
    },
    example: (props) => <CalendarMonth date={new Date(props.date)} onChange={() => {}} onMonthChange={() => {}} />
  }
);
