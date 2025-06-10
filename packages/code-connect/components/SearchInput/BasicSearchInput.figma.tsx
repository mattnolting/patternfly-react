import figma from '@figma/code-connect';
import { SearchInput } from '@patternfly/react-core';

figma.connect(
  SearchInput,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=8065-140137&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      // string
      placeholder: figma.string('✏️ Placeholder text')
      })
    },
    example: (props) => (
      // Documentation for SearchInput can be found at https://www.patternfly.org/components/search-input
      <SearchInput placeholder={props.placeholder} value={props.isFilledValue} onChange={() => {}} onClear={() => {}} />
    )
  }
);
