import figma from '@figma/code-connect';
import { BreadcrumbItem } from '@patternfly/react-core';

figma.connect(
  BreadcrumbItem,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=19922-43760&t=TMTA4Fpy1ljK4qQP-11',
  {
    props: {
      // enums
      state: figma.enum('State', {
        Clicked: true
      })
    },
    example: (props) => (
      // Documentation for BreadcrumbItem can be found at https://www.patternfly.org/components/breadcrumb
      <BreadcrumbItem isActive={props.state} isDropdown />
    )
  }
);
