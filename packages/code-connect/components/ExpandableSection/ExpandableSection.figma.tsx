import figma from '@figma/code-connect';
import { ExpandableSection, ExpandableSectionToggle, Stack, StackItem } from '@patternfly/react-core';

// TODO: DESIGN: This component needs to be overhauled. Using the base component approach present in
// other components would significantly reduce complexity.
// TODO: DESIGN: Create toggle component
// onToggle={() => {}} // only required if the user wants to be able to have other side effects when opening/closing
// isExpanded={() => {}} // only required if the user wants to be able to have other side effects when opening/closing

// Documentation for ExpandableSection can be found at https://www.patternfly.org/components/expandable-section

const customToggleContent = `
    <div>
    <span>You can also use icons </span>
    <CheckCircleIcon />
    <span> or badges </span>
    <Badge isRead={true}>4</Badge>
    <span> !</span>
  </div>
`;

export const sharedProps = {
  state: 'const [isExpanded, setIsExpanded] = React.useState(false)',
  toggleTextCollapsed: figma.string('Toggle Text More'),
  toggleTextExpanded: figma.string('Toggle Text Less'),
  expandedContentSectionText: figma.string('Expanded Text'),
  toggleId: 'toggle-id',
  contentId: 'content-id'
};

figma.connect(
  ExpandableSection,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2404-21',
  {
    props: {
      ...sharedProps
    },
    example: (props) => {
      /* eslint-disable */
      const [isExpanded, setIsExpanded] = React.useState(false);
      /* eslint-enable */

      return (
        <ExpandableSection
          onToggle={() => {
            setIsExpanded(!isExpanded);
          }}
          toggleText={isExpanded ? 'Show less basic example content' : `${props.toggleTextCollapsed}`}
        >
          {props.state}
          This content is visible only when the component is expanded.
        </ExpandableSection>
      );
    }
  }
);

figma.connect(
  ExpandableSection,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2404-21',
  {
    variant: { State: 'Expanded Basic' },
    props: {
      ...sharedProps
    },
    example: (props) => {
      /* eslint-disable */
      const [isExpanded, setIsExpanded] = React.useState(false);
      /* eslint-enable */

      return (
        <ExpandableSection
          isExpanded
          onToggle={() => {
            setIsExpanded(!isExpanded);
          }}
          toggleText={isExpanded ? `${props.toggleTextExpanded}` : `${props.toggleTextCollapsed}`}
        >
          {props.expandedContentSectionText}
        </ExpandableSection>
      );
    }
  }
);

figma.connect(
  ExpandableSection,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2404-21',
  {
    variant: { State: 'Expand Detached' },
    props: {
      ...sharedProps
    },
    example: (props) => {
      /* eslint-disable */
      const [isExpanded, setIsExpanded] = React.useState(false);
      /* eslint-enable */

      return (
        <Stack hasGutter>
          <StackItem>
            <ExpandableSection isExpanded={false} isDetached toggleId={props.toggleId} contentId={props.contentId}>
              {props.expandedContentSectionText}
            </ExpandableSection>
          </StackItem>
          <StackItem>
            <ExpandableSectionToggle
              onToggle={() => {
                setIsExpanded(!isExpanded);
              }}
              toggleId={props.toggleId}
              contentId={props.contentId}
              direction="up"
            >
              {isExpanded ? `${props.toggleTextCollapsed}` : 'Show less basic example content'}
            </ExpandableSectionToggle>
          </StackItem>
        </Stack>
      );
    }
  }
);

figma.connect(
  ExpandableSection,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2404-21',
  {
    variant: { State: 'Expanded Indent' },
    props: {
      ...sharedProps
    },
    example: (props) => {
      /* eslint-disable */
      const [isExpanded, setIsExpanded] = React.useState(false);
      /* eslint-enable */

      return (
        <ExpandableSection
          toggleText={isExpanded ? `${props.toggleTextExpanded}` : 'Show less indented example content'}
          isExpanded={isExpanded}
          isIndented
          onToggle={() => {
            setIsExpanded(!isExpanded);
          }}
        >
          {props.expandedContentSectionText}
        </ExpandableSection>
      );
    }
  }
);

figma.connect(
  ExpandableSection,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2404-21',
  {
    variant: { State: 'Default Custom Content' },
    example: () => {
      /* eslint-disable */
      const [isExpanded, setIsExpanded] = React.useState(false);
      /* eslint-enable */

      return (
        <ExpandableSection toggleContent={customToggleContent} isExpanded={isExpanded} onToggle={() => {}}>
          This content is visible only when the component is expanded.
        </ExpandableSection>
      );
    }
  }
);

figma.connect(
  ExpandableSection,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2404-21',
  {
    variant: { State: 'Expanded Custom Content' },
    example: () => {
      /* eslint-disable */
      const [isExpanded, setIsExpanded] = React.useState(false);
      /* eslint-enable */

      return (
        <ExpandableSection toggleContent={customToggleContent} isExpanded={isExpanded} onToggle={() => {}}>
          This content is visible only when the component is expanded.
        </ExpandableSection>
      );
    }
  }
);

figma.connect(
  ExpandableSection,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2404-21',
  {
    variant: { State: 'Expanded Custom with Component swap' },
    example: () => {
      /* eslint-disable */
      const [isExpanded, setIsExpanded] = React.useState(false);
      /* eslint-enable */

      return (
        <ExpandableSection toggleContent={customToggleContent} isExpanded={isExpanded} onToggle={() => {}}>
          This content is visible only when the component is expanded.
        </ExpandableSection>
      );
    }
  }
);
