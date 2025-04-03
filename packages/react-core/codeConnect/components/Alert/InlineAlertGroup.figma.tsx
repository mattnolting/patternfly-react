// InlineAlertGroup.figma.tsx
import { AlertGroup } from '@patternfly/react-core/dist/js/components/Alert/AlertGroup';
import { Alert } from '@patternfly/react-core/dist/js/components/Alert';
import figma from '@figma/code-connect';

figma.connect(
  AlertGroup,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1110-2780&m=dev',
  {
    props: {
      // Alert properties for demonstration
      alertVariants: figma.boolean('Show Multiple Variants', {
        true: true,
        false: false
      }),
      hasActions: figma.boolean('Show Actions', {
        true: true,
        false: false
      }),
      isDismissable: figma.boolean('Show Dismiss Button', {
        true: true,
        false: false
      }),

      // Overflow properties
      hasOverflow: figma.boolean('Show Overflow', {
        true: true,
        false: false
      }),
      overflowText: figma.string('Overflow Text', 'View 3 more alerts'),

      // Group properties
      maxHeight: figma.boolean('Constrain Height', {
        true: true,
        false: false
      })
    },
    example: (props) => {
      // Create action links if needed
      const createActionLinks = () =>
        props.hasActions ? (
          <>
            <button className="pf-c-button pf-m-link pf-m-inline" type="button">
              Action
            </button>
            <button className="pf-c-button pf-m-link pf-m-inline" type="button">
              Action
            </button>
          </>
        ) : undefined;

      // Create close button if needed
      const createActionClose = () =>
        props.isDismissable ? (
          <button className="pf-c-button pf-m-plain" type="button" aria-label="Close alert">
            <span className="pf-c-icon">
              <i className="fas fa-times" aria-hidden="true"></i>
            </span>
          </button>
        ) : undefined;

      return (
        <AlertGroup style={props.maxHeight ? { maxHeight: '300px', overflow: 'auto' } : undefined}>
          <Alert
            variant="info"
            title="Info alert title"
            isInline={true}
            actionLinks={createActionLinks()}
            actionClose={createActionClose()}
          >
            This is an informational alert description.
          </Alert>

          {props.alertVariants && (
            <>
              <Alert
                variant="success"
                title="Success alert title"
                isInline={true}
                actionLinks={createActionLinks()}
                actionClose={createActionClose()}
              >
                This is a success alert description.
              </Alert>

              <Alert
                variant="warning"
                title="Warning alert title"
                isInline={true}
                actionLinks={createActionLinks()}
                actionClose={createActionClose()}
              >
                This is a warning alert description.
              </Alert>

              <Alert
                variant="danger"
                title="Danger alert title"
                isInline={true}
                actionLinks={createActionLinks()}
                actionClose={createActionClose()}
              >
                This is a danger alert description.
              </Alert>
            </>
          )}

          {props.hasOverflow && (
            <div className="pf-c-alert-group__overflow">
              <button className="pf-c-button pf-m-link pf-m-inline">{props.overflowText}</button>
            </div>
          )}
        </AlertGroup>
      );
    }
  }
);
