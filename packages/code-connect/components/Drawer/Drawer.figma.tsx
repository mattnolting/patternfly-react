import figma from '@figma/code-connect';
import { Drawer } from '@patternfly/react-core';

figma.connect(
  Drawer,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=8034-7676&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      // boolean
      isExpanded: figma.boolean('Show Footer actions'),
      isResizable: figma.boolean('Is resizable'),
      description: figma.string('Description'),
      headerText: figma.string('Header text'),

      // enum
      isInline: figma.enum('Type', { Inline: 'inline' }),
      isLeft: figma.enum('Position', { Left: 'start' }),

      // children
      children: figma.children('*'),
      drawerMain: figma.instance('DrawerMain'),
      mainContent: figma.children('DrawerMain')
    },
    example: (props) => (
      // Documentation for Drawer can be found at https://www.patternfly.org/components/drawer
      <Drawer isExpanded={props.isExpanded} isInline={props.isInline} position={props.isLeft}>
        {props.children}
        {props.mainContent}
      </Drawer>
    )
  }
);
