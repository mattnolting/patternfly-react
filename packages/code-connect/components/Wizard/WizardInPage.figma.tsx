import figma from '@figma/code-connect';
import { Wizard } from '@patternfly/react-core';

figma.connect(
  Wizard,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=14628-23799&m=dev',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => <Wizard>{props.children}</Wizard>
  }
);
