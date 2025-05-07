import figma from '@figma/code-connect';
import { Timestamp } from '@patternfly/react-core';

/**
 * PatternFly Timestamp component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/timestamp
 */

figma.connect(
  Timestamp,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=7472-6718&m=dev',
  {
    props: {
      // string
      abbreviatedContent: figma.string('✏️ Abbreviated content', '21 Jan 2019'),
      defaultTimestampContent: figma.string('✏️ Default timestamp content', 'Thursday, 21 January 2019, 9:38 PM EST'),
      numericContent: figma.string('✏️ Numeric content', '01/21/2019'),
      withoutDay: figma.string('✏️ Without day', 'January 2019, 9:38 PM EST'),
      withoutTime: figma.string('✏️ Without time', '21 January 2019'),

      // boolean
      withTooltipUnderline: figma.boolean('With tooltip underline'),

      // enum
      format: figma.enum('Format', {
        Default: 'default',
        'Without time': 'without-time',
        'Without day': 'without-day',
        Abbreviated: 'abbreviated',
        Numeric: 'numeric'
      })
    },
    example: (props) => {
      let dateString = props.defaultTimestampContent;

      if (props.format === 'without-time') {
        dateString = props.withoutTime;
      } else if (props.format === 'without-day') {
        dateString = props.withoutDay;
      } else if (props.format === 'abbreviated') {
        dateString = props.abbreviatedContent;
      } else if (props.format === 'numeric') {
        dateString = props.numericContent;
      }

      return <Timestamp date={dateString} displayFormat={props.format} tooltip={props.withTooltipUnderline} />;
    }
  }
);
