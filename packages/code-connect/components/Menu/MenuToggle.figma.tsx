import figma from '@figma/code-connect';
import { Avatar, MenuToggle } from '@patternfly/react-core';
import imgAvatar from '@patternfly/react-core/src/components/assets/avatarImg.svg';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';

// Documentation for MenuToggle can be found at https://www.patternfly.org/components/menu-toggle

figma.connect(
  MenuToggle,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=7829-30614',
  {
    props: {
      // boolean
      showAvatar: figma.boolean('Show Avatar', {
        true: <Avatar src={imgAvatar} alt="avatar" />,
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

      // enum
      isDisabled: figma.enum('State', { Disabled: true }),
      state: figma.enum('State', {
        Default: 'default',
        Disabled: 'disabled',
        Selected: 'selected',
        Hover: 'hover',
        Danger: 'danger',
        Warning: 'warning',
        Success: 'success'
      }),
      status: figma.enum('State', {
        Danger: 'danger',
        Warning: 'warning',
        Success: 'success'
      }),
      style: figma.enum('Style', {
        Default: 'default',
        'Plain - Icon': 'plain---icon',
        'Plain text': 'plain'
      })
    },
    example: (props) => (
      <MenuToggle
        badge={props.showBadge}
        customIcon={props.showCustomIcon}
        icon={props.showAvatar}
        status={props.status}
        isDisabled={props.isDisabled}
        hasCheckbox={props.showCheckbox}
      >
        {props.toggleText}
      </MenuToggle>
    )
  }
);
