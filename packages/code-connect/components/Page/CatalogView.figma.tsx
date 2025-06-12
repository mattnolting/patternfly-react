import figma from '@figma/code-connect';
import { Page } from '@patternfly/react-core';

figma.connect(
  Page,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=25656-311437&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => (
      // Documentation for Page can be found at https://www.patternfly.org/components/page
      <Page>{props.children}</Page>
    )
  }
);
