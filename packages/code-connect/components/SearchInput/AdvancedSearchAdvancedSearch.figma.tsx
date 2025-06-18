import figma from '@figma/code-connect';
import { SearchInput } from '@patternfly/react-core';

// Documentation for SearchInput can be found at https://www.patternfly.org/components/search-input

figma.connect(
  SearchInput,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=8065-140343&t=IzSunfrnw18ti37Y-11',
  {
    props: {},
    example: () => <SearchInput />
  }
);
