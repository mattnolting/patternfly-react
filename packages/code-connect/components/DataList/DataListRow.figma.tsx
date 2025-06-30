import figma from '@figma/code-connect';
import { DataListItemRow } from '@patternfly/react-core';

// TODO: DESIGN: Define "show left/right actions" intent
// Documentation for DataListItemRow can be found at https://www.patternfly.org/components/data-list

figma.connect(
  DataListItemRow,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=6649-69488',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => <DataListItemRow aria-label="Data list item row">{props.children}</DataListItemRow>
  }
);
