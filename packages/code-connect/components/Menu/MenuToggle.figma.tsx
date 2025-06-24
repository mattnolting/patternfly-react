import figma from '@figma/code-connect';
import { Button, MenuToggle } from '@patternfly/react-core';

// Documentation for MenuToggle can be found at https://www.patternfly.org/components/menu-toggle

figma.connect(
  MenuToggle,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=7829-30614',
  {
    props: {
      toggleText: figma.string('✏️ Toggle Text'),
      showAvatar: figma.boolean('Show Avatar'),
      showCheckbox: figma.boolean('Show Checkbox'),
      showBadge: figma.boolean('Show Badge'),
      showCustomIcon: figma.boolean('Show Custom Icon'),
      // toggleText: figma.boolean('Toggle text'),
      style: figma.enum('Style', {
        Default: 'default',
        'Plain - Icon': 'plain---icon',
        'Plain text': 'plain-text'
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
      <MenuToggle>
        <Button variant={props.style}>{props.toggleText}</Button>
      </MenuToggle>
    )
  }
);
