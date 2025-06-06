import figma from '@figma/code-connect';
import { ExpandableSection } from '@patternfly/react-core';

/**
 * PatternFly ExpandableSection component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/expandable-section#truncated-content
 */

figma.connect(
  ExpandableSection,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2769-146&m=dev',
  {
    props: {
      // string
      expandedContentSectionText: figma.string('Expanded Truncate Text'),
      toggleTextExpanded: figma.string('Toggle Text Less'),
      toggleTextCollapsed: figma.string('Toggle Text More'),

      // Boolean
      isIndented: figma.enum('State', {
        'Expanded Indent': true
      }),
      isDetached: figma.enum('State', {
        'Expand Detached': true
      }),
      isExpanded: figma.enum('State', {
        Expanded: true
      })
    },
    example: (props) => (
      // Documentation for ExpandableSection can be found at https://www.patternfly.org/components/expandable-section
      <ExpandableSection
        isExpanded={props.isExpanded}
        isIndented={props.isIndented}
        toggleTextCollapsed={props.toggleTextCollapsed}
        toggleTextExpanded={props.toggleTextExpanded}
        variant="truncate"
      >
        {props.expandedContentSectionText}
      </ExpandableSection>
    )
  }
);
