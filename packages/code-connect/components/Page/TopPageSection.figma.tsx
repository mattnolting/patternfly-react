import figma from '@figma/code-connect';
import { Breadcrumb, PageGroup, PageSection } from '@patternfly/react-core';

// Breadcrumbs in page content need a <PageBreadcumbs... wrapper. Figma won't render figma.children('🧰 Breadcrumbs')
// inside a React component. The same is true with any other Figma component as a React child
// Documentation for Page can be found at https://www.patternfly.org/components/page

figma.connect('https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2104-8584', {
  props: {
    breadCrumb: figma.enum('Type', {
      Breadcrumbs: figma.children('🧰 Breadcrumbs')
    }),
    empty: figma.enum('Type', {
      Empty: <PageSection></PageSection>
    }),
    inPageHorizontalNav: figma.enum('Type', {
      'In-Page Horizontal Nav': figma.children('*')
    }),
    body: figma.children('*'),
    children: figma.children('*')
  },
  example: (props) => (
    <>
      <Breadcrumb>{props.breadCrumb}</Breadcrumb>
      {props.empty}
      <PageGroup>{props.inPageHorizontalNav}</PageGroup>
    </>
  )
});
