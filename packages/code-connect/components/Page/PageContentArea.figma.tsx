import figma from '@figma/code-connect';
import { PageBreadcrumb, PageSection } from '@patternfly/react-core';

// TODO: FIGMA: Use Masthead for Brand and Tools
// TODO: FIGMA: Create and configure Page Section

figma.connect(
  PageSection,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=25656-311374',
  {
    props: {
      breadcrumb: <PageBreadcrumb>figma.children('🧰 Breadcrumbs')</PageBreadcrumb>,
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
