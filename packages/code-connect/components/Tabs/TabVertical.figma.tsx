import figma from '@figma/code-connect';
import { TabVertical } from '@patternfly/react-core';

/**
 * PatternFly TabVertical integration for Figma Code Connect
 */

figma.connect(
  TabVertical,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=14327-6407&m=dev',
  {
    props: {
      text: figma.string('Text', 'Tab name'),
      helpIcon: figma.boolean('Help icon'),
      hasIcon: figma.boolean('Has icon'),
      closeIcon: figma.boolean('Close Icon'),
      type: figma.enum('Type', {
        'Default tab': 'default-tab',
        'Box tab': 'box-tab',
        'Last Brd Rght': 'last-brd-rght',
        'First/Last Left Border': 'first-last-left-border',
        'First/Last Right Border': 'first-last-right-border',
        'Boxed light': 'boxed-light'
      }),
      state: figma.enum('State', {
        Default: 'default',
        Hover: 'hover',
        Selected: 'selected',
        Disabled: 'disabled'
      })
    },
    example: (props) => (
      // Documentation for TabVertical can be found at https://www.patternfly.org/components/tabs
      <TabVertical
        title={props.text}
        hasHelpIcon={props.helpIcon}
        hasIcon={props.hasIcon}
        hasCloseIcon={props.closeIcon}
        variant={props.type}
        state={props.state}
      />
    )
  }
);
