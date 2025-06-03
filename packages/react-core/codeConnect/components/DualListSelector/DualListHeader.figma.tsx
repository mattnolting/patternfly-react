import figma from '@figma/code-connect';
import { DualListHeader } from '@patternfly/react-core';

figma.connect(
  DualListHeader,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=21279-116172&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      itemInformation: figma.string('Item information'),
      headerText: figma.string('Header text'),
      hasSearchBar: figma.boolean('Has search bar')
    },
    example: (props) => (
      <DualListHeader 
        itemInformation={props.itemInformation}
        headerText={props.headerText}
        hasSearchBar={props.hasSearchBar}
      />
    )
  }
);
