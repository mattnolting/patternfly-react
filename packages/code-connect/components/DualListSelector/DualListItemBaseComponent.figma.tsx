import figma from '@figma/code-connect';
import { DualListSelectorListItem } from '@patternfly/react-core';

/**
 * PatternFly DualListSelectorListItem integration for Figma Code Connect
 * @patternfly https://www.patternfly.org/components/dual-list-selector
 * @figma https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=21279-116294
 */

figma.connect(
  DualListSelectorListItem,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=21279-116294&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      // string
      itemText: figma.string('Item text'),

      // boolean
      isDraggable: figma.boolean('Is Draggable'),

      // enum
      isSelected: figma.enum('State', { Selected: true }),

      content: figma.string('Item text'),
      children: figma.children('*')
    },
    example: (props) => (
      <DualListSelectorListItem isDraggable={props.isDraggable} isSelected={props.isSelected}>
        {props.content}
        {props.children}
      </DualListSelectorListItem>
    )
  }
);
