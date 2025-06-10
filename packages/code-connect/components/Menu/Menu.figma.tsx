import figma from '@figma/code-connect';
import { Menu, MenuContent } from '@patternfly/react-core';

/**
 * PatternFly Menu integration for Figma Code Connect
 */

figma.connect(
  Menu,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2590-18585&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      searchInput: figma.boolean('Show search input'),
      children: figma.children('*')
    },
    example: (props) => (
      // Documentation for Menu can be found at https://www.patternfly.org/components/menu
      <Menu>
        <MenuContent>{props.children}</MenuContent>
      </Menu>
    )
  }
);
