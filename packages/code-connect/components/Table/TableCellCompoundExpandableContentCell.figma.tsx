import figma from '@figma/code-connect';
import { Td } from '@patternfly/react-table';

figma.connect(
  Td,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2912-36168',
  {
    props: {
      type: figma.enum('Type', {
        'Icon + Text': 'icon-text',
        Link: 'link',
        Text: 'text',
        'Inline edit': 'inline-edit',
        'Icon only': 'icon-only',
        Label: 'label',
        Skeleton: 'skeleton'
      }),
      state: figma.enum('State', {
        Default: undefined,
        Hover: 'hover',
        Selected: 'selected'
      }),
      labelType: figma.instance('Label type'),
      // Pre-configured compoundExpand property
      compoundExpand: figma.enum('State', {
        Default: {
          isExpanded: false,
          onToggle: () => {}
        },
        Selected: {
          isExpanded: true,
          onToggle: () => {}
        }
      }),

      children: figma.children('*')
    },
    example: (props) => (
      <Td dataLabel="Compound expandable cell" compoundExpand={props.compoundExpand} type={props.type}>
        {props.children}
      </Td>
    )
  }
);
