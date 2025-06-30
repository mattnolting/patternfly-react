import figma from '@figma/code-connect';
import { Card, CardBody, CardFooter, CardHeader, CardTitle } from '@patternfly/react-core';

// TODO: DESIGN: Auto-layouts are not consistently retrievablewith Code Connect
// TODO: DESIGN: Add separate CardHeader actions
// TODO: DESIGN: Use MenuToggle for dropdown

// Documentation for Card can be found at https://www.patternfly.org/components/card

figma.connect(
  Card,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=3144-18658',
  {
    props: {
      // boolean
      isExpandable: figma.boolean('Is expandable'),

      // enum
      isCompact: figma.enum('Size', { Compact: true }),
      isLarge: figma.enum('Size', { Large: true }),
      isPlain: figma.enum('Style', { Plain: true }),
      variant: figma.enum('Style', { Secondary: 'secondary' }),

      // children
      children: figma.children('*'),
      title: figma.children('Title'),

      cardTitle: figma.textContent('Title + Description'),
      cardHeadertest: figma.children('Card Header'),
      bodyContent: figma.textContent('Body text'),
      footerContent: figma.textContent('Footer'),

      cardHeader: figma.boolean('Card header', {
        true: <CardHeader>Card header content</CardHeader>,
        false: undefined
      }),
      cardBody: figma.boolean('Card body', {
        true: <CardBody>Card body content</CardBody>,
        false: undefined
      }),
      cardFooter: figma.boolean('Card footer', {
        true: <CardFooter>Card footer content</CardFooter>,
        false: undefined
      })
    },
    example: (props) => (
      <Card id="<card-id>">
        {props.cardHeadertest}
        <CardHeader
          // actions={{ actions: headerActions }}
          onExpand={() => {}}
          toggleButtonProps={{
            id: 'toggle-button',
            'aria-label': 'Details',
            'aria-labelledby': 'expandable-card-title toggle-button',
            'aria-expanded': false
          }}
        >
          <CardTitle id="expandable-card-title">{props.title}</CardTitle>
        </CardHeader>
        {props.cardBody}
        {props.cardFooter}
        {props.children}
      </Card>
    )
  }
);
