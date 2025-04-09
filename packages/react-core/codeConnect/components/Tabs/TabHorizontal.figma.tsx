import figma from '@figma/code-connect';
import { TabHorizontal } from './TabHorizontal';

/**
 * PatternFly Tab Horizontal integration for Figma Code Connect
 */

figma.connect(
  TabHorizontal,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=14327-6161&m=dev',
  {
    props: {
      tabText: figma.string('Tab Text', 'Tab name'),
      hasIcon: figma.boolean('Has icon'),
      helpButton: figma.boolean('Help button'),
      closeButton: figma.boolean('Close button'),
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
      <TabHorizontal
        title={props.tabText}
        hasIcon={props.hasIcon}
        hasHelpButton={props.helpButton}
        hasCloseButton={props.closeButton}
        variant={props.type}
        state={props.state}
        moreText={props.moreTabText}
      />
    )
  }
);
