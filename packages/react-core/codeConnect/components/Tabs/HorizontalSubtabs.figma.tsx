import figma from '@figma/code-connect';
import { Tabs, Tab } from '@patternfly/react-core';

/**
 * PatternFly Horizontal Subtabs integration for Figma Code Connect
 */

figma.connect(
  Tabs,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=14327-6583&m=dev',
  {
    props: {
      inset: figma.boolean('Inset'),
      type: figma.enum('Type', {
        Default: 'default',
        Boxed: 'boxed',
        'Boxed Light': 'boxed-light',
        'Horizontal overflow': 'horizontal-overflow',
        'With overflow': 'with-overflow'
      })
    },
    example: (props) => (
      <Tabs
        variant={props.type}
        inset={props.inset}
        isSecondary={true}
        component="nav"
        aria-label="Horizontal subtabs example"
      >
        <Tab eventKey={0} title="Subtab 1" />
        <Tab eventKey={1} title="Subtab 2" />
        <Tab eventKey={2} title="Subtab 3" />
      </Tabs>
    )
  }
);
