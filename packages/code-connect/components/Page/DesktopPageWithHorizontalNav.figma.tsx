import figma from '@figma/code-connect';
import { Page } from '@patternfly/react-core';

// Documentation for Page can be found at https://www.patternfly.org/components/page

figma.connect(
  Page,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=7620-35193',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => <Page>{props.children}</Page>
  }
);
