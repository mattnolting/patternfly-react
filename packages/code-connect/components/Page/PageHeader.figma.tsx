import figma from '@figma/code-connect';
import { PageSection, PageBreadcrumb } from '@patternfly/react-core';

figma.connect(
  PageSection,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=25278-223089&m=dev',
  {
    props: {
      isSticky: figma.enum('Type', {
        Default: false,
        Sticky: { default: 'top' }
      }),

      breadCrumb: figma.children('🧰 Breadcrumbs'),
      children: figma.children('*')
    },
    example: (props) => (
      <PageSection>
        <PageBreadcrumb>{props.breadCrumb}</PageBreadcrumb>
        {props.children}
      </PageSection>
    )
  }
);
