import figma from '@figma/code-connect';
import { DualListHeader } from '@patternfly/react-core';

/**
 * PatternFly DualListSelectorListItem integration for Figma Code Connect
 * @patternfly https://www.patternfly.org/components/dual-list-selector
 */

figma.connect(
  DualListHeader,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=21279-116172&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      // boolean
      hasSearchBar: figma.boolean('Has search bar'),

      // string
      headerText: figma.string('Header text'),
      itemInformation: figma.string('Item information'),

      children: figma.children('*')
    },
    example: (props) => (
      // Documentation for DualListHeader can be found at https://www.patternfly.org/components/dual-list-selector
      <DualListHeader>{props.children}</DualListHeader>
    )
  }
);
