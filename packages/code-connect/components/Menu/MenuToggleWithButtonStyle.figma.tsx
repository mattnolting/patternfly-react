import figma from '@figma/code-connect';
import { Button, MenuToggle } from '@patternfly/react-core';

// Documentation for MenuToggle can be found at https://www.patternfly.org/components/menu-toggle-with-button-style

figma.connect(
  MenuToggle,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=3466-40444',
  {
    props: {
      toggleText: figma.string('✏️ Toggle Text'),
      showCustomIcon: figma.boolean('Show Custom Icon'),
      showBadge: figma.boolean('Show Badge'),
      showCheckbox: figma.boolean('Show Checkbox'),
      showAvatar: figma.boolean('Show Avatar'),
      style: figma.enum('Style', {
        Primary: 'primary',
        Secondary: 'secondary'
      }),
      state: figma.enum('State', {
        Default: 'default',
        Hover: 'hover',
        Disabled: 'disabled',
        Selected: 'selected'
      })
    },
    example: (props) => (
      <MenuToggle>
        <Button variant={props.style}>{props.toggleText}</Button>
      </MenuToggle>
    )
  }
);
