import figma from '@figma/code-connect';
import { Breadcrumb, PageSection } from '@patternfly/react-core';

// TODO: FIGMA: Use Masthead for Brand and Tools
// TODO: FIGMA: Create and configure Page Section
// Documentation for PageSection can be found at https://www.patternfly.org/components/page

figma.connect(
  PageSection,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=25656-311374',
  {
    props: {
      breadcrumb: <Breadcrumb>figma.children('🧰 Breadcrumbs')</Breadcrumb>,
      children: figma.children('*')
    },
    example: (props) => (
      <>
        {props.breadcrumb}
        <PageSection>{props.children}</PageSection>
      </>
    )
  }
);
