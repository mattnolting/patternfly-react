import figma from '@figma/code-connect';
import { FormFieldGroup } from '@patternfly/react-core';

figma.connect(
  FormFieldGroup,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=17114-21566&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => <FormFieldGroup>{props.children}</FormFieldGroup>
  }
);
