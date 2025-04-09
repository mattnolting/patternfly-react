import { TabSubtabsHorizontal } from '@patternfly/react-core';
import figma from '@figma/code-connect';

/**
 * PatternFly TabSubtabsHorizontal integration for Figma Code Connect
 */

figma.connect(
  TabSubtabsHorizontal,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=14327-6284&m=dev',
  {
    props: {
      tabText: figma.string('Tab Text', 'Tab name'),
      helpIcon: figma.boolean('Help icon'),
      hasIcon: figma.boolean('Has icon'),
      closeIcon: figma.boolean('Close Icon'),
      type: figma.enum('Type', {
        'Default tab': 'default-tab',
        'Box tab': 'box-tab',
        'Boxed Light': 'boxed-light',
        Inset: 'inset',
        'Inset Boxed': 'inset-boxed',
        More: 'more'
      }),
      state: figma.enum('State', {
        Default: 'default',
        Hover: 'hover',
        Selected: 'selected',
        Disabled: 'disabled'
      }),
      moreTabText: figma.string('More Tab Text', 'More')
    },
    example: (props) => (
      <TabSubtabsHorizontal
        title={props.tabText}
        hasHelpIcon={props.helpIcon}
        hasIcon={props.hasIcon}
        hasCloseIcon={props.closeIcon}
        variant={props.type}
        state={props.state}
        moreText={props.moreTabText}
      />
    )
  }
);
