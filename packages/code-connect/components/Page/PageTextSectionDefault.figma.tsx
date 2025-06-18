import figma from '@figma/code-connect';
import { PageSection } from '@patternfly/react-core';

// Documentation for PageSection can be found at https://www.patternfly.org/components/page

figma.connect(
  PageSection,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2104-8581',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => <PageSection>{props.children}</PageSection>
  }
);
