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
      // string
      moreTabText: figma.string('More Tab Text'),
      tabText: figma.string('Tab Text'),

      // boolean
      closeButton: figma.boolean('Close button'),
      hasIcon: figma.boolean('Has icon'),
      helpButton: figma.boolean('Help button'),

      // enum
      state: figma.enum('State', {
        Default: 'default',
        Disabled: 'disabled',
        Hover: 'hover',
        Selected: 'selected'
      }),
      type: figma.enum('Type', {
        'Default tab': 'default-tab',
        'Box tab': 'box-tab',
        'Boxed Light': 'boxed-light',
        Inset: 'inset',
        'Inset Boxed': 'inset-boxed',
        More: 'more'
      })
    },
    example: (props) => (
      // Documentation for TabHorizontal can be found at https://www.patternfly.org/components/tabs
      <TabHorizontal
        hasCloseButton={props.closeButton}
        hasHelpButton={props.helpButton}
        hasIcon={props.hasIcon}
        moreText={props.moreTabText}
        state={props.state}
        title={props.tabText}
        variant={props.type}
      />
    )
  }
);
