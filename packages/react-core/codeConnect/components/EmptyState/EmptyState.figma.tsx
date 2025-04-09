import figma from '@figma/code-connect';
import { EmptyState, EmptyStateIcon, EmptyStateBody, EmptyStateHeader, Button } from '@patternfly/react-core';

figma.connect(
  EmptyState,
  "https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=7896-37441&m=dev",
  {
    props: {
      headerText: figma.string("Header text", "No results found"),
      bodyText: figma.string("Body text", "No results match the filter criteria. Remove all filters or clear all filters to show results."),
      showIcon: figma.boolean("Show Icon", {
        true: <EmptyStateIcon icon={CubesIcon} />,
        false: ''
      }),
      size: figma.enum("Size", {
        Basic: "basic",
        Small: "small",
        Large: "large",
        "Extra Large": "extra-large",
        "Extra small": "extra-small",
      }),
      variant: figma.enum("Type", {
        Default: "default",
        Create: "create",
        "No results": "no-results",
        Success: "success",
        Error: "error",
        Permissions: "permissions",
        Loading: "loading",
      })
    },
    example: (props) => (
      <EmptyState
        variant={props.variant}
        size={props.size}
      >
        {props.showIcon}
        <EmptyStateHeader>{props.headerText}</EmptyStateHeader>
        <EmptyStateBody>{props.bodyText}</EmptyStateBody>
      </EmptyState>
    )
  }
);
