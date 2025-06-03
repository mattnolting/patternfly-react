import figma from '@figma/code-connect';
import { PageSection } from '@patternfly/react-core';

/**
 * PatternFly PageSection integration for Figma Code Connect
 */

figma.connect(
  PageSection,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2104-8584&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      showBreadcrumbs: figma.boolean('Show breadcrumbs'),
      showSubNav: figma.boolean('Show sub nav'),
      type: figma.enum('Type', {
        Breadcrumbs: 'breadcrumbs',
        Empty: 'empty',
        'In-Page Horizontal Nav': 'in-page-horizontal-nav'
      })
    },
    example: (props) => <PageSection>{props.showBreadcrumbs && 'Breadcrumbs'}{props.showSubNav && 'Sub Nav'}</PageSection>
  }
);
