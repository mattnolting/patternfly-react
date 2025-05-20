import figma from '@figma/code-connect';
import { Button } from '@patternfly/react-core';

/**
 * PatternFly Icon Button component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/Button
 */

figma.connect(
  Button,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1259-736&t=TMTA4Fpy1ljK4qQP-11',
  {
    props: {
      // enums
      isClicked: figma.enum('State', { Clicked: true }),
      isDisabled: figma.enum('State', { Disabled: true }),

      // variants
      hasNoPadding: figma.enum('Type', { 'No padding': true })
    },
    example: (props) => (
      <Button
        variant="control"
        aria-label="Icon button"
        // TODO: Map icon to children
        icon={<EllipsisVIcon />}
        isClicked={props.isClicked}
        isDisabled={props.isDisabled}
        hasNoPadding={props.hasNoPadding}
      />
    )
  }
);
