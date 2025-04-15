import figma from '@figma/code-connect';
import { TreeView } from '@patternfly/react-core';
import { TreeNodeBaseComponent } from './TreeNodeBaseComponent';

/**
 * PatternFly TreeView integration for Figma Code Connect
 */

figma.connect(
  TreeView,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=12615-2825&m=dev',
  {
    props: {
      withSearch: figma.boolean('With Search'),
      hasCheckboxes: figma.enum('Type', {
        'With Checkboxes': true,
        Default: false,
        'With Badges': false,
        'With Icons': false,
        'With Actions': false
      }),
      hasBadges: figma.enum('Type', {
        'With Badges': true,
        Default: false,
        'With Checkboxes': false,
        'With Icons': false,
        'With Actions': false
      }),
      hasIcons: figma.enum('Type', {
        'With Icons': true,
        Default: false,
        'With Checkboxes': false,
        'With Badges': false,
        'With Actions': false
      }),
      hasActions: figma.enum('Type', {
        'With Actions': true,
        Default: false,
        'With Checkboxes': false,
        'With Badges': false,
        'With Icons': false
      }),
      variant: figma.enum('Type', {
        Default: 'default',
        'separate selection & expansion': 'compact',
        'With Branching': 'default',
        'With Checkboxes': 'default',
        'With Icons': 'default',
        'With Badges': 'default',
        'With Actions': 'default'
      })
    },
    example: (props) => (
      <TreeView variant={props.variant} hasCheckboxes={props.hasCheckboxes} hasBadges={props.hasBadges}>
        <TreeNodeBaseComponent
          text="Tree node"
          showCaret
          withIcon={props.hasIcons}
          withActions={props.hasActions}
          withCheckbox={props.hasCheckboxes}
          showBadge={props.hasBadges}
          nodeGuide
          endNodeGuide
        />
        <TreeNodeBaseComponent
          text="Tree node"
          showCaret
          withIcon={props.hasIcons}
          withActions={props.hasActions}
          withCheckbox={props.hasCheckboxes}
          showBadge={props.hasBadges}
          nodeGuide
        >
          <TreeNodeBaseComponent
            text="Tree node"
            showCaret
            withIcon={props.hasIcons}
            withActions={props.hasActions}
            withCheckbox={props.hasCheckboxes}
            showBadge={props.hasBadges}
            nodeGuide
          />
          <TreeNodeBaseComponent
            text="Tree node"
            withIcon={props.hasIcons}
            withActions={props.hasActions}
            withCheckbox={props.hasCheckboxes}
            showBadge={props.hasBadges}
            nodeGuide
          />
          <TreeNodeBaseComponent
            text="Tree node"
            showCaret
            withIcon={props.hasIcons}
            withActions={props.hasActions}
            withCheckbox={props.hasCheckboxes}
            showBadge={props.hasBadges}
            endNodeGuide
          />
        </TreeNodeBaseComponent>
        <TreeNodeBaseComponent
          text="Tree node"
          showCaret
          withIcon={props.hasIcons}
          withActions={props.hasActions}
          withCheckbox={props.hasCheckboxes}
          showBadge={props.hasBadges}
          endNodeGuide
        />
      </TreeView>
    )
  }
);
