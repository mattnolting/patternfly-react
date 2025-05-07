import figma from '@figma/code-connect';
import { MenuTypeaheadToggle } from '@patternfly/react-core';

/**
 * PatternFly MenuTypeaheadToggle integration for Figma Code Connect
 */

figma.connect(
  MenuTypeaheadToggle,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2689-49976&m=dev',
  {
    props: {
      // string
      toggleText: figma.string('✏️ Toggle Text'),

      // boolean
      hasToggleText: figma.boolean('Toggle text'),
      showAvatar: figma.boolean('Show Avatar'),
      showBadge: figma.boolean('Show Badge'),
      showCheckbox: figma.boolean('Show Checkbox'),
      showChips: figma.boolean('Show Chips'),
      showCustomIcon: figma.boolean('Show Custom Icon'),

      // enum
      state: figma.enum('State', {
        Default: 'default',
        Hover: 'hover',
        Selected: 'selected'
      })
    },
    example: (props) => (
      <MenuTypeaheadToggle
        hasToggleText={props.hasToggleText}
        showAvatar={props.showAvatar}
        showBadge={props.showBadge}
        showCheckbox={props.showCheckbox}
        showChips={props.showChips}
        showCustomIcon={props.showCustomIcon}
        state={props.state}
        toggleText={props.toggleText}
      />
    )
  }
);
