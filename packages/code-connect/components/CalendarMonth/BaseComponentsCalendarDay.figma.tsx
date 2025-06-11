import figma from '@figma/code-connect';
import { CalendarMonth } from '@patternfly/react-core';

figma.connect(
  CalendarMonth,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=7741-2677',
  {
    props: {
      // enum
      month: figma.enum('Month', {
        'Previous/Future': 'previous-future',
        'Selected month': 'selected-month'
      }),
      isDisabled: figma.enum('State', { Disabled: true }),
      state: figma.enum('State', {
        Disabled: 'disabled',
        Default: 'default',
        'Current day': 'current-day',
        Hover: 'hover',
        Selected: 'selected',
        Focus: 'focus',
        'Selected & Focused': 'selected---focused'
      }),
      type: figma.enum('Type', {
        Basic: 'basic',
        'Date range start': 'date-range-start',
        'Date range end': 'date-range-end',
        'Date range - middle': 'date-range---middle'
      })
    },
    example: (props) => (
      <CalendarMonth
        date={date}
        onChange={() => {}}
        onMonthChange={() => {}}
        validators={undefined}
        disabled={props.isDisabled}
        aria-label="Calendar month"
      />
    )
  }
);
