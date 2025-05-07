import figma from '@figma/code-connect';
import { MenuToggle } from '@patternfly/react-core';

/**
 * PatternFly MenuToggle component integration for Figma Code Connect
 */

figma.connect(
  MenuToggle,
  "https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=7829-30614&m=dev",
  {
    props: {
      hasToggleText: figma.boolean("Toggle text"),
      showBadge: figma.boolean("Show Badge"),
      showCheckbox: figma.boolean("Show Checkbox"),
      showCustomIcon: figma.boolean("Show Custom Icon"),
      showAvatar: figma.boolean("Show Avatar"),
      toggleText: figma.string("✏️ Toggle Text"),
      variant: figma.enum("Style", {
        Default: "default",
        "Plain - Icon": "plain",
        "Plain text": "plain"
      }),
      state: figma.enum("State", {
        Default: "default",
        Disabled: "disabled",
        Selected: "selected",
        Hover: "hover",
        Danger: "danger",
        Warning: "warning",
        Success: "success"
      }),
      isDisabled: figma.enum("State", {
        Disabled: true,
        Default: false,
        Selected: false,
        Hover: false,
        Danger: false,
        Warning: false,
        Success: false
      })
    },
    example: (props) => (
      <MenuToggle
        hasToggleText={props.hasToggleText}
        showBadge={props.showBadge}
        showCheckbox={props.showCheckbox}
        showCustomIcon={props.showCustomIcon}
        showAvatar={props.showAvatar}
        toggleText={props.toggleText}
        variant={props.variant}
        state={props.state}
        isDisabled={props.isDisabled}
      />
    )
  }
);
