import figma from '@figma/code-connect';
import { Card, CardTitle, CardBody } from '@patternfly/react-core';

/**
 * PatternFly Card integration for Figma Code Connect
 */

figma.connect(
  Card,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=12615-19749&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      titleText: figma.string('Title text'),
      subtitle: figma.string('Subtitle'),
      showSubtitle: figma.boolean('Show subtitle'),
      isDisabled: figma.enum('State', {
        Disabled: true,
        Default: false,
        Hover: false,
        Clicked: false
      })
    },
    example: (props) => (
      <Card>
        <CardTitle>{props.titleText}</CardTitle>
        <CardBody>
          {props.showSubtitle && props.subtitle}
        </CardBody>
      </Card>
    )
  }
);
