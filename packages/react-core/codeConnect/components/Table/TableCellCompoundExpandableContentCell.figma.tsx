import figma from '@figma/code-connect';
import { TableCellCompoundExpandableContentCell } from './TableCellCompoundExpandableContentCell';

/**
 * PatternFly TableCellCompoundExpandableContentCell component integration for Figma Code Connect
 */

figma.connect(
  TableCellCompoundExpandableContentCell,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2912-36168&m=dev',
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
        Default: 'default',
        Hover: 'hover',
        Selected: 'selected'
      }),
      labelType: figma.instance('Label type')
    },
    example: (props) => (
      <TableCellCompoundExpandableContentCell type={props.type} state={props.state} labelType={props.labelType} />
    )
  }
);
