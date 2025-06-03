import figma from '@figma/code-connect';
import { FormFieldGroupHeader } from '@patternfly/react-core';

figma.connect(
  FormFieldGroupHeader,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=17114-21473&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      showAction: figma.boolean('Show action'),
      // showDescription: figma.boolean('Show description', { true: 'Field group header description' }),
      children: figma.children('*')
    },
    example: (props) => <FormFieldGroupHeader actions={props.showAction}>{props.children}</FormFieldGroupHeader>
  }
);
