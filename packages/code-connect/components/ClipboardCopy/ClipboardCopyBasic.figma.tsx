import figma from '@figma/code-connect';
import { ClipboardCopy } from '@patternfly/react-core';

figma.connect(
  ClipboardCopy,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=9914-75835',
  {
    props: {
      // enum
      isActive: figma.enum('State', { Active: true }),
      isExpanded: figma.enum('State', { Expanded: true }),
      isReadOnly: figma.enum('State', { 'Read only': true }),
      expansion: figma.enum('State', {
        Expanded: 'expansion',
        false: undefined
      }),

      children: figma.children('*')
    },
    example: (props) => (
      // Documentation for ClipboardCopy can be found at https://www.patternfly.org/components/clipboard-copy
      <ClipboardCopy
        isActive={props.isActive}
        isExpanded={props.isExpanded}
        isReadOnly={props.isReadOnly}
        variant={props.expansion}
      >
        {props.children}
      </ClipboardCopy>
    )
  }
);
