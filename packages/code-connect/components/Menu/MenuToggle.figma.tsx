import figma from '@figma/code-connect';
import { Avatar, MenuToggle, MenuToggleCheckbox } from '@patternfly/react-core';
import imgAvatar from '@patternfly/react-core/src/components/assets/avatarImg.svg';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';

// Documentation for MenuToggle can be found at https://www.patternfly.org/components/menu-toggle

figma.connect(
  MenuToggle,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=7829-30614',
  {
    props: {
      showAvatar: figma.boolean('Show Avatar', {
        true: <Avatar src={imgAvatar} alt="avatar" />,
        false: undefined
      }),

      showCheckbox: figma.boolean('Show Checkbox', {
        true: <MenuToggleCheckbox id="<split-button-checkbox-id>" key="split-checkbox" aria-label="Checkbox" />,
        false: undefined
      }),
      toggleText: figma.boolean('Toggle text', {
        true: figma.string('✏️ Toggle Text'),
        false: undefined
      }),

      showBadge: figma.boolean('Show Badge', {
        true: figma.children('Badge'),
        false: undefined
      }),
      showCustomIcon: figma.boolean('Show Custom Icon', {
        true: <CogIcon />,
        false: undefined
      }),

      style: figma.enum('Style', {
        Default: 'default',
        'Plain - Icon': 'plain---icon',
        'Plain text': 'plain-text'
      }),

      isDisabled: figma.enum('State', { Disabled: true }),
      status: figma.enum('State', {
        Danger: 'danger',
        Warning: 'warning',
        Success: 'success'
      }),
      state: figma.enum('State', {
        Default: 'default',
        Disabled: 'disabled',
        Selected: 'selected',
        Hover: 'hover',
        Danger: 'danger',
        Warning: 'warning',
        Success: 'success'
      })
    },
    example: (props) => (
      <MenuToggle
        icon={props.showAvatar}
        status={props.status}
        isDisabled={props.isDisabled}
        badge={props.showBadge}
        customIcon={props.showCustomIcon}
      >
        {props.toggleText}
      </MenuToggle>
    )
  }
);
