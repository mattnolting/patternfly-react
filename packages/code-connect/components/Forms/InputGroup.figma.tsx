import figma from '@figma/code-connect';
import { InputGroup, InputGroupItem } from '@patternfly/react-core';

// Documentation for InputGroup can be found at https://www.patternfly.org/components/input-group

figma.connect(
  InputGroup,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=12700-4200&m=dev',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => (
      <InputGroup>
        <InputGroupItem>{props.children}</InputGroupItem>
      </InputGroup>
    )
  }
);
