import figma from '@figma/code-connect';
import { NavGroup } from '@patternfly/react-core';

/**
 * PatternFly NavGroup component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/navigation
 */

figma.connect(
  NavGroup,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2104-7117&m=dev',
  {
    props: {
      headerTitle: figma.string('✏️ Header title'),
      children: figma.children('*')
    },
    example: (props) => (
      // Documentation for NavGroup can be found at https://www.patternfly.org/components/navigation
      <NavGroup title={props.headerTitle}>{props.children}</NavGroup>
    )
  }
);
