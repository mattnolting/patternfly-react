import figma from '@figma/code-connect';
import { Menu, MenuContent } from '@patternfly/react-core';

/**
 * PatternFly Menu integration for Figma Code Connect
 */

figma.connect(
  Menu,
  "https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2590-18585&t=IzSunfrnw18ti37Y-11",
  {
    props: {
      menuType: figma.enum("Menu", {
        "Basic": <MenuItem>Action 1</MenuItem>
<MenuItem>Action 2</MenuItem>
<MenuItem>Action 3</MenuItem>,
        "Plain Menu": <MenuItem>Plain item 1</MenuItem>
<MenuItem>Plain item 2</MenuItem>
<MenuItem>Plain item 3</MenuItem>,
        "With Actions": <MenuItem>Item with action
  <MenuItemAction>
    <EllipsisVIcon />
  </MenuItemAction>
</MenuItem>
<MenuItem>Another action item
  <MenuItemAction>
    <EllipsisVIcon />
  </MenuItemAction>
</MenuItem>,
        "With Separator": <MenuItem>First group item</MenuItem>
<Divider component="li" />
<MenuItem>Second group item</MenuItem>,
        "With Links": <MenuItem>Regular item</MenuItem>
<MenuItem to="#link-1">Link item</MenuItem>
<MenuItem to="https://www.example.com" isExternalLink>External link</MenuItem>,
        "With Icons": <MenuItem icon={<UsersIcon />}>Users</MenuItem>
<MenuItem icon={<CogIcon />}>Settings</MenuItem>
<MenuItem icon={<HelpIcon />}>Help</MenuItem>,
        "Titled Groups": <MenuGroup label="Group 1">
  <MenuItem>Group 1 item 1</MenuItem>
  <MenuItem>Group 1 item 2</MenuItem>
</MenuGroup>
<MenuGroup label="Group 2">
  <MenuItem>Group 2 item 1</MenuItem>
  <MenuItem>Group 2 item 2</MenuItem>
</MenuGroup>,
        "Option Select": <MenuItem itemId="option1" isSelected>Option 1</MenuItem>
<MenuItem itemId="option2">Option 2</MenuItem>
<MenuItem itemId="option3">Option 3</MenuItem>,
        "Item Checkbox": <MenuItem hasCheckbox isSelected>Selected item</MenuItem>
<MenuItem hasCheckbox>Unselected item</MenuItem>,
        "Danger": <MenuItem>Regular item</MenuItem>
<MenuItem isDanger>Danger item</MenuItem>,
      }),
      searchInput: figma.enum("Search input", {
        "None": "",
        "With search": <MenuSearch>
  <MenuSearchInput>
    <SearchInput placeholder="Search" />
  </MenuSearchInput>
</MenuSearch>
      })
    },
    example: (props) => (
      <Menu>
        {props.searchInput}
        <MenuContent>
          {props.menuType}
        </MenuContent>
      </Menu>
    )
  }
);
