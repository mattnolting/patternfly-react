import figma from '@figma/code-connect';
import { ActionsColumn } from '@patternfly/react-table';
import { MenuToggle } from '@patternfly/react-core';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

/**
 * PatternFly ActionsColumn component integration for Figma Code Connect
 */

figma.connect(
  ActionsColumn,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2912-36519&m=dev',
  {
    props: {
      size: figma.enum('Size', {
        Default: 'default',
        Compact: 'compact'
      }),
      // Nested properties for the icon button
      iconButton: figma.nestedProps('Icon Button (Plain Button)', {
        state: figma.enum('State', {
          Default: 'default',
          Hover: 'hover',
          Clicked: 'clicked',
          Disabled: 'disabled'
        }),
        type: figma.enum('Type', {
          'Default (with padding)': 'default'
        })
      }),
      // Nested properties for the icon wrapper
      iconWrapper: figma.nestedProps('IconWrapper', {
        iconSize: figma.enum('Icon Size', {
          'Standalone - Medium': 'medium'
        }),
        icon: figma.enum('Icon', {
          'fa-ellipsis-v': 'ellipsis-v'
        })
      }),
      // Default items for the dropdown
      items: [{ title: 'Action 1' }, { title: 'Action 2' }, { title: 'Action 3' }]
      // Pre-defined actionsToggle with all possible configurations
    },
    example: (props) => (
      <ActionsColumn size={props.size} items={props.items} actionsToggle={props.actionsToggle}>
        <MenuToggle
          aria-label="Actions"
          isDisabled={props.iconButton.state.isDisabled}
          variant="plain"
          icon="EllipsisVIcon"
        />
      </ActionsColumn>
    )
  }
);
