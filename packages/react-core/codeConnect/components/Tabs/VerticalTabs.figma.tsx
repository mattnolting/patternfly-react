import figma from '@figma/code-connect';
import { Tabs, Tab } from '@patternfly/react-core';

/**
 * PatternFly VerticalTabs integration for Figma Code Connect
 */

figma.connect(
  Tabs,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=14327-6656&m=dev',
  {
    props: {
      type: figma.enum('Type', {
        Default: 'default',
        Boxed: 'boxed',
        'Boxed Light': 'boxed-light',
        Expandable: 'expandable'
      })
    },
    example: (props) => (
      <Tabs variant={props.type} isVertical={true} component="nav" aria-label="Vertical tabs example">
        <Tab eventKey={0} title="Containers" />
        <Tab eventKey={1} title="Database" />
        <Tab eventKey={2} title="Disabled" isDisabled />
      </Tabs>
    )
  }
);
