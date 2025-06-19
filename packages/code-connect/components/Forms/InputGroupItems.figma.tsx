import figma from '@figma/code-connect';
import { InputGroupItem } from '@patternfly/react-core';

// Documentation for InputGroup can be found at https://www.patternfly.org/components/input-group

figma.connect('https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=176-2806', {
  props: {
    children: figma.children('*')
  },
  example: (props) => <InputGroupItem>{props.children}</InputGroupItem>
});
