import figma from '@figma/code-connect';
import { PageSection, Breadcrumb } from '@patternfly/react-core';

// Documentation for PageSection can be found at https://www.patternfly.org/components/page

figma.connect(
  PageSection,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=25278-223089',
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
        <Breadcrumb>{props.breadCrumb}</Breadcrumb>
        {props.children}
      </PageSection>
    )
  }
);
