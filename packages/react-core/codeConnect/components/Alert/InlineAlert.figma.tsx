import { Alert } from '@patternfly/react-core/dist/js/components/Alert';
import figma from "@figma/code-connect";

figma.connect(
  Alert,
  "https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1110-2698&m=dev",
  {
    props: {
      // Alert variant
      variant: figma.enum('Type', {
        Info: 'info',
        Success: 'success',
        Warning: 'warning',
        Danger: 'danger',
        Custom: 'custom'
      }, 'Info'),

      // Alert title (required)
      title: figma.string('Title', 'Alert title'),

      // Optional description
      description: figma.boolean('Description', {
        true: figma.string('Description Text', 'Alert description goes here'),
        false: null
      }),

      // Expandable toggle
      isExpandable: figma.boolean('Expandable', false),

      // Action links
      hasActions: figma.boolean('Actions', false),

      // Close button
      isDismissable: figma.boolean('Dismissable', false),

      // Visual styling
      isPlain: figma.boolean('Plain', false),

      // Title truncation
      truncateTitle: figma.number('Truncate Title Lines', 0)
    },
    example: (props) => {
      // Create action links if needed
      const actionLinks = props.hasActions ? (
        <>
          <button className="pf-c-button pf-m-link pf-m-inline" type="button">Action</button>
          <button className="pf-c-button pf-m-link pf-m-inline" type="button">Action</button>
        </>
      ) : undefined;

      // Create close button if needed
      const actionClose = props.isDismissable ? (
        <button
          className="pf-c-button pf-m-plain"
          type="button"
          aria-label="Close alert"
        >
          <span className="pf-c-icon">
            <i className="fas fa-times" aria-hidden="true"></i>
          </span>
        </button>
      ) : undefined;

      return (
        <Alert
          variant={props.variant}
          title={props.title}
          isInline={true} // Always true for InlineAlert
          isPlain={props.isPlain}
          isExpandable={props.isExpandable}
          truncateTitle={props.truncateTitle}
          actionLinks={actionLinks}
          actionClose={actionClose}
        >
          {props.description}
        </Alert>
      );
    }
  }
);
