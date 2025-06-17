import figma from '@figma/code-connect';
import { CardHeader } from '@patternfly/react-core';

// TODO: FIGMA: Add separate CardHeader actions
// TODO: FIGMA: Use MenuToggle for dropdown

figma.connect(
  CardHeader,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=3144-17097&m=dev',
  {
    props: {
      actions: figma.children('*')
    },
    example: (props) => <CardHeader actions={props.actions} />
  }
);
