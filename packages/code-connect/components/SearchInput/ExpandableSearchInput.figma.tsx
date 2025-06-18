import figma from '@figma/code-connect';
import { SearchInput } from '@patternfly/react-core';

// Documentation for SearchInput can be found at https://www.patternfly.org/components/search-input

figma.connect(
  SearchInput,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=8065-140337',
  {
    props: {
      isExpanded: figma.enum('State', {
        Expanded: `{ isExpanded, onToggleExpand, toggleAriaLabel: 'Expandable search input toggle' }`,
        Default: false
      }),
      placeHolder: figma.enum('State', {
        Expanded: figma.children('✏️ Placeholder text'),
        Default: undefined
      })
    },
    example: (props) => (
      <SearchInput
        expandableInput={props.isExpanded}
        placeholder={props.placeholder}
        value=""
        onChange={() => {}}
        onClear={() => {}}
        onSearch={() => {}}
      />
    )
  }
);
