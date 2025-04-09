import { HorizontalTabs, Tab } from '@patternfly/react-core';
import figma from '@figma/code-connect';

/**
 * PatternFly HorizontalTabs integration for Figma Code Connect
 */

figma.connect(
  HorizontalTabs,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=14327-6503&m=dev',
  {
    props: {
      type: figma.enum('Type', {
        Default: 'default',
        Boxed: 'boxed',
        'Boxed Light': 'boxed-light',
        'With overflow': 'with-overflow',
        'With horizontal overflow': 'with-horizontal-overflow',
        Dynamic: 'dynamic'
      }),
      inset: figma.boolean('Inset'),
      // Nested Tab-Horizontal component properties
      tabHorizontal: figma.nestedProps('Tab - Horizontal', {
        type: figma.enum('Type', {
          'Default tab': 'default-tab'
        }),
        state: figma.enum('State', {
          Default: 'default'
        }),
        tabText: figma.string('Tab Text', 'Tab name'),
        hasIcon: figma.boolean('Has icon'),
        helpButton: figma.boolean('Help button'),
        closeButton: figma.boolean('Close button')
      }),
      showLeftScrollArrow: figma.boolean('Show Left Scroll Arrow'),
      showRightScrollArrow: figma.boolean('Show Right Scroll Arrow')
    },
    example: (props) => (
      <HorizontalTabs
        variant={props.type}
        inset={props.inset}
        showLeftScrollArrow={props.showLeftScrollArrow}
        showRightScrollArrow={props.showRightScrollArrow}
      >
        <Tab
          title={props.tabHorizontal.tabText}
          hasIcon={props.tabHorizontal.hasIcon}
          hasHelpButton={props.tabHorizontal.helpButton}
          hasCloseButton={props.tabHorizontal.closeButton}
          variant={props.tabHorizontal.type}
          state={props.tabHorizontal.state}
        />
      </HorizontalTabs>
    )
  }
);
