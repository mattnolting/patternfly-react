import figma from '@figma/code-connect';
import { Timestamp } from '@patternfly/react-core';

/**
 * PatternFly Timestamp integration for Figma Code Connect
 */

figma.connect(
  Timestamp,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=7472-6718&m=dev',
  {
    props: {
      defaultTimestampContent: figma.string('✏️ Default timestamp content', 'Thursday, 21 January 2019, 9:38 PM EST'),
      withoutTime: figma.string('✏️ Without time', '21 January 2019'),
      abbreviatedContent: figma.string('✏️ Abbreviated content', '21 Jan 2019'),
      withoutDay: figma.string('✏️ Without day', 'January 2019, 9:38 PM EST'),
      numericContent: figma.string('✏️ Numeric content', '01/21/2019'),
      withTooltipUnderline: figma.boolean('With tooltip underline'),
      format: figma.enum('Format', {
        Default: 'default',
        'Without time': 'without-time',
        'Without day': 'without-day',
        Abbreviated: 'abbreviated',
        Numeric: 'numeric'
      })
    },
    example: (props) => (
      <Timestamp
        date={props.defaultTimestampContent}
        displayFormat={props.format}
        tooltip={props.withTooltipUnderline}
      />
    )
  }
);
