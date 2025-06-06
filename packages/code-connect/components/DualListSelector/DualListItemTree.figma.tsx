import figma from '@figma/code-connect';
import { DualListSelectorListItem } from '@patternfly/react-core';

/**
 * PatternFly AccordionToggle integration for Figma Code Connect
 * @patternfly https://www.patternfly.org/components/dual-list-selector
 */

figma.connect(
  DualListSelectorListItem,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=21279-116342&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => (
      // Documentation for DualListSelectorListItem can be found at https://www.patternfly.org/components/dual-list-selector
      <DualListSelectorListItem>{props.children}</DualListSelectorListItem>
    )
  }
);
