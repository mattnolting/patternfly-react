import figma from '@figma/code-connect';
import { MenuToggle } from '@patternfly/react-core';

/**
 * PatternFly MenuToggle with Button Style integration for Figma Code Connect
 */

figma.connect(
  MenuToggle,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=3466-40444&m=dev',
  {
    props: {
      // string
      toggleText: figma.string('✏️ Toggle Text'),

      // boolean
      showAvatar: figma.boolean('Show Avatar'),
      showBadge: figma.boolean('Show Badge'),
      showCheckbox: figma.boolean('Show Checkbox'),
      showCustomIcon: figma.boolean('Show Custom Icon'),
      hasToggleText: figma.boolean('Toggle text'),

      // enum
      state: figma.enum('State', {
        Default: 'default',
        Disabled: 'disabled',
        Hover: 'hover',
        Selected: 'selected'
      }),
      variant: figma.enum('Style', {
        Primary: 'primary',
        Secondary: 'secondary'
      })
    },
    example: (props) => (
      // Documentation for MenuToggle can be found at https://www.patternfly.org/components/menu
      <MenuToggle
        hasToggleText={props.hasToggleText}
        showAvatar={props.showAvatar}
        showBadge={props.showBadge}
        showCheckbox={props.showCheckbox}
        showCustomIcon={props.showCustomIcon}
        state={props.state}
        toggleText={props.toggleText}
        variant={props.variant}
      />
    )
  }
);
