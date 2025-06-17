import figma from '@figma/code-connect';
import { PageSection } from '@patternfly/react-core';

figma.connect(
  PageSection,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2104-8581&m=dev',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => <PageSection>{props.children}</PageSection>
  }
);
