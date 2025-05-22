import figma from '@figma/code-connect';
import { Hint, HintBody, HintFooter, HintTitle, Button } from '@patternfly/react-core';

/**
 * PatternFly Hint component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/hint
 */

figma.connect(
  Hint,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1118-3329&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      // string
      bodyText: figma.string('✏️ Body'),
      footerLinkText: figma.string('✏️ Footer Link'),
      titleText: figma.string('✏️ Title'),

      // enum
      components: figma.enum('Components', {
        'Title, Body, Footer': 'all',
        'Title and Body': 'title-body',
        'Title and Footer': 'title-footer',
        'Body and Footer': 'body-footer',
        'Title Only': 'title-only',
        'Body Only': 'body-only',
        'Footer Only': 'footer-only'
      })
    },
    example: (props) => (
      <Hint>
        <HintTitle>{props.titleText}</HintTitle>
        <HintBody>{props.bodyText}</HintBody>
        <HintFooter>
          <Button variant="link">{props.footerLinkText}</Button>
        </HintFooter>
      </Hint>
    )
  }
);
