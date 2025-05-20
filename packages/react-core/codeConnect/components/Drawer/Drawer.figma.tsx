import figma from '@figma/code-connect';
import { Drawer } from '@patternfly/react-core';

/**
 * PatternFly Drawer component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/drawer
 */

const main = {
  title: 'teste'
};

figma.connect(
  Drawer,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=8034-7676&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      mainContent: figma.children('DrawerMain'),
      // children
      drawerMain: figma.instance('DrawerMain'),

      // boolean
      isExpanded: figma.boolean('Show Footer actions'),
      isInline: figma.enum('Type', { Inline: true }),
      isResizable: figma.boolean('Is resizable'),
      isStatic: figma.boolean('Has action icon'),

      // enum
      isLeft: figma.enum('Position', { Left: 'start' }),

      children: figma.children('*')
    },
    example: (props) => (
      <Drawer isExpanded={props.isExpanded} isInline={props.isInline} isStatic={props.isStatic} position={props.isLeft}>
        {props.children}
        {props.mainContent}
        {main}
      </Drawer>
    )
  }
);
