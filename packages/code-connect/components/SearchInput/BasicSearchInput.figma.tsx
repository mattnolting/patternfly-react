import figma from '@figma/code-connect';
import { SearchInput } from '@patternfly/react-core';

/**
 * PatternFly SearchInput integration for Figma Code Connect
 * @patternfly https://www.patternfly.org/components/search-input
 * @figma https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=8065-140137
 */

figma.connect(
  SearchInput,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=8065-140137&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      value: figma.string('✏️ Searched text'),
      placeholder: figma.string('✏️ Placeholder text'),
      children: figma.children('*')
    },
    example: (props) => (
      <SearchInput 
        value={props.value}
        placeholder={props.placeholder}
      >
        {props.children}
      </SearchInput>
    )
  }
);
