import figma from '@figma/code-connect';
import { NavGroup } from '@patternfly/react-core';

// Documentation for NavGroup can be found at https://www.patternfly.org/components/nav

figma.connect(
  NavGroup,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2104-7233&m=dev',
  {
    props: {
      // boolean
      headerTitle: figma.boolean('Show Group header', {
        true: 'Group header',
        false: undefined
      }),

      children: figma.children('Nav item')
    },
    example: (props) => <NavGroup title={props.headerTitle}>{props.children}</NavGroup>
  }
);
