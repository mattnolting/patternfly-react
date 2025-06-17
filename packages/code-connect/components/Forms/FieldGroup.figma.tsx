import figma from '@figma/code-connect';
import { FormFieldGroupExpandable } from '@patternfly/react-core';

figma.connect(
  FormFieldGroupExpandable,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=17114-21566&m=dev',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => <FormFieldGroupExpandable>{props.children}</FormFieldGroupExpandable>
  }
);
