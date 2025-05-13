import figma from '@figma/code-connect';
import { Form } from '@patternfly/react-core';

figma.connect(
  Form,
  "https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1577-2965&t=IzSunfrnw18ti37Y-11",
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => <Form>{props.children}</Form>,
  },
)
