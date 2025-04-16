import figma from '@figma/code-connect';
import { Card } from '@patternfly/react-core';

/**
 * PatternFly Basic Card component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/Card
 */

figma.connect(
  Card,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6%3A-Components-Test?node-id=3144-18658&m=dev',
  {
    props: {
      cardBody: figma.boolean('Card body'),
      cardTitle: figma.string('✏️ Card title'),
      footerComponentSlots: figma.boolean('Footer Component Slots'),
      trailingTitleIcon: figma.boolean('Trailing Title Icon'),
      leadingTitleIcon: figma.boolean('Leading Title Icon'),
      cardFooter: figma.boolean('Card footer'),
      cardDescription: figma.string('✏️ Card description'),
      cardFooter: figma.string('✏️ Card footer'),
      bodyText: figma.boolean('Body text'),
      headerImage: figma.boolean('Header image'),
      bodyText: figma.string('✏️ Body text'),
      bodyComponentSlots: figma.boolean('Body Component Slots'),
      expandableBody: figma.boolean('Expandable body'),
      cardDescription: figma.boolean('Card description'),
      headerAction: figma.boolean('Header action'),
      cardHeader: figma.boolean('Card header'),
      style: figma.enum('Style', {
        Secondary: 'secondary',
        Plain: 'plain',
        Default: 'default'
      }),
      size: figma.enum('Size', {
        Compact: 'compact',
        Default: 'default',
        Large: 'large'
      }),
      isExpandable: figma.boolean('Is expandable'),
      children: figma.children('*')
    },
    example: (props) => <Card>{props.children}</Card>
  }
);
