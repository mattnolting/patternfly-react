import figma from '@figma/code-connect';
import { HelperText, HelperTextItem } from '@patternfly/react-core';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';

/**
 * PatternFly HelperText integration for Figma Code Connect
 */

figma.connect(
  HelperText,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=151-1670&t=lyan2LLnXsDppzjo-11',
  {
    props: {
      helperText: figma.string('✏️ Helper text', 'This is helper text'),
      icon: figma.boolean('Icon'),
      type: figma.enum('Type', {
        Default: 'default',
        Indeterminate: 'indeterminate',
        Success: 'success',
        Warning: 'warning',
        Error: 'error'
      })
    },
    example: (props) => {
      // Determine the icon based on type and icon prop
      let iconComponent;
      if (props.icon) {
        if (props.type === 'Success') {
          iconComponent = <CheckCircleIcon />;
        } else if (props.type === 'Warning') {
          iconComponent = <ExclamationTriangleIcon />;
        } else if (props.type === 'Error') {
          iconComponent = <ExclamationCircleIcon />;
        } else {
          iconComponent = <InfoCircleIcon />;
        }
      }

      return (
        <HelperText>
          <HelperTextItem icon={props.icon ? iconComponent : undefined} variant={props.type?.toLowerCase()}>
            {props.helperText}
          </HelperTextItem>
        </HelperText>
      );
    }
  }
);
