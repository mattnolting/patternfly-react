import figma from '@figma/code-connect';
import { NavGroup } from '@patternfly/react-core';

// documentation for NavGroup can be found at https://www.patternfly.org/components/nav

figma.connect(
  NavGroup,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2104-7117',
  {
    props: {
      headerTitle: figma.string('✏️ Header title'),
      children: figma.children('*')
    },
    example: (props) => <NavGroup title={props.headerTitle}>{props.children}</NavGroup>
  }
);
