import figma from '@figma/code-connect';
import { CardHeader } from '@patternfly/react-core';

// TODO: DESIGN: Add separate CardHeader actions
// TODO: DESIGN: Use MenuToggle for dropdown
// Documentation for Card can be found at https://www.patternfly.org/components/card

figma.connect(
  CardHeader,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=3144-17097',
  {
    props: {
      actions: figma.children('*')
    },
    example: (props) => <CardHeader actions={props.actions} />
  }
);
