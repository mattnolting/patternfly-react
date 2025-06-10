import figma from '@figma/code-connect';
import { ExpandableSection } from '@patternfly/react-core';

figma.connect(
  ExpandableSection,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2404-21&m=dev',
  {
    props: {
      // enum
      isIndented: figma.enum('State', { 'Expanded Indent': true }),
      isDetached: figma.enum('State', { 'Expand Detached': true }),
      isExpanded: figma.enum('State', {
        'Expanded Basic': true,
        'Expand Detached': true,
        'Expanded Indent': true,
        'Expanded Custom Content': true,
        'Expanded Custom with Component swap': true
      }),
      toggleTextExpanded: figma.enum('State', {
        'Expanded Basic': figma.string('Toggle Text Less'),
        'Expand Detached': figma.string('Toggle Text Less'),
        'Expanded Indent': figma.string('Toggle Text Less'),
        'Expanded Custom Content': figma.string('Toggle Text Less'),
        'Expanded Custom with Component swap': figma.string('Toggle Text Less')
      }),
      expandedContentSectionText: figma.enum('State', {
        'Expanded Basic': figma.string('Expanded Text'),
        'Expand Detached': figma.string('Expanded Text'),
        'Expanded Indent': figma.string('Expanded Text'),
        'Expanded Custom Content': figma.string('Expanded Text'),
        'Expanded Custom with Component swap': figma.string('Expanded Text')
      }),
      toggleTextCollapsed: figma.enum('State', {
        Default: figma.string('Toggle Text More'),
        Hover: figma.string('Toggle Text More'),
        'Default Custom Content': figma.string('Toggle Text More')
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
