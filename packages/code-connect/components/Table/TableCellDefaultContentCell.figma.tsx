import figma from '@figma/code-connect';
import { Flex, FlexItem } from '@patternfly/react-core';
import { Td } from '@patternfly/react-table';
import BlueprintIcon from '@patternfly/react-icons/dist/esm/icons/blueprint-icon';

// Documentation for Table can be found at https://www.patternfly.org/components/table

figma.connect(Td, 'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=14-389', {
  variant: { Type: 'Icon + Text' },
  props: {
    icon: <BlueprintIcon />,
    tdText: 'Td text'
  },
  example: (props) => (
    <Td>
      <Flex>
        <FlexItem>{props.icon}</FlexItem>
        <FlexItem>{props.tdText}</FlexItem>
      </Flex>
    </Td>
  )
});

figma.connect(Td, 'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=14-389', {
  variant: { Type: 'Icon only' },
  props: {
    icon: <BlueprintIcon />
  },
  example: (props) => <Td>{props.icon}</Td>
});

figma.connect(Td, 'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=14-389', {
  variant: { Type: 'Text' },
  props: {
    tdText: 'Td text'
  },
  example: (props) => <Td>{props.tdText}</Td>
});

figma.connect(Td, 'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=14-389', {
  props: {
    children: figma.children('*')
  },
  example: (props) => <Td>{props.children}</Td>
});
