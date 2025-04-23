import figma from '@figma/code-connect';
import { Button } from '@patternfly/react-core';
import { EllipsisVIcon } from '@patternfly/react-icons';

/**
 * PatternFly Icon Button component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/Button
 */

figma.connect(
  Button,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1259-736&t=TMTA4Fpy1ljK4qQP-11',
  {
    props: {
      // icon
      // iconWrapper: figma.instance({}),

      // enums
      isClicked: figma.enum('State', {
        Clicked: true
      }),
      isDisabled: figma.enum('State', {
        Disabled: true
      }),

      // variants
      type: figma.enum('Type', {
        'No padding': true
      })
    },
    example: (props) => (
      <Button
        variant="control"
        aria-label="Icon button"
        icon={<EllipsisVIcon />}
        isClicked={props.isClicked}
        isDisabled={props.isDisabled}
      />
    )
  }
);
