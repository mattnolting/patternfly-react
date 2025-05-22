import figma from '@figma/code-connect';
import { ExpandableSection } from '@patternfly/react-core';

/**
 * PatternFly ExpandableSection component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/expandable-section#truncated-content
 */

figma.connect(
  ExpandableSection,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2404-21&m=dev',
  {
    props: {
      // string
      expandedContentSectionText: figma.string('Expanded Text'),
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
        'Expanded Basic': true,
        'Expand Detached': true,
        'Expanded Indent': true,
        'Expanded Custom Content': true,
        'Expanded Custom with Component swap': true
      })
    },
    example: (props) => (
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
