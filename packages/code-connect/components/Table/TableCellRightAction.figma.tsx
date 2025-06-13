import figma from '@figma/code-connect';
import { Td } from '@patternfly/react-table';
import { IconWrapper } from 'src/components/Icon/IconWrapper.tsx';

figma.connect(
  Td,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2912-36519',
  {
    props: {
      size: figma.enum('Size', {
        Default: undefined,
        Compact: 'compact'
      })
      // Instead of trying to directly reference layers that may not exist with
      // those exact names, let's use simpler properties that match what's in the UI
      // iconButtonState: figma.enum('State', {
      //   Default: undefined,
      //   Hover: 'hover',
      //   Clicked: 'clicked',
      //   Disabled: 'disabled'
      // }),
      // iconButtonType: figma.enum('Type', {
      //   'Default (with padding)': 'default-with-padding'
      // }),
      // iconSize: figma.enum('Icon Size', {
      //   'Standalone - Medium': 'medium'
      // }),
      // icon: figma.enum('Icon', {
      //   'fa-ellipsis-v': 'ellipsis-v'
      // }),
      // iconWrapper: figma.instance('IconWrapper'),
      // actionButton: figma.children('ActionButton')
    },
    example: (props) => (
      // Documentation for Td can be found at https://www.patternfly.org/components/table
      <Td size={props.size} isActionCell={true} className="pf-v5-u-text-align-right" />
      // <IconWrapper iconSize={props.iconSize} icon={props.icon} />
      // <div>
      //   {props.iconWrapper}
      //   {props.actionButton}
      // </div>
    )
  }
);
