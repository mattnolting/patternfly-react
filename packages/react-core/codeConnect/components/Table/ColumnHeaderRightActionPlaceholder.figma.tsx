import figma from '@figma/code-connect';
import { ColumnHeaderRightActionPlaceholder } from './ColumnHeaderRightActionPlaceholder';

/**
 * PatternFly ColumnHeaderRightActionPlaceholder component integration for Figma Code Connect
 */

figma.connect(
  ColumnHeaderRightActionPlaceholder,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=6241-29627&m=dev',
  {
    props: {
      size: figma.enum("Size", {
        Default: "default",
        Compact: "compact",
      }),
    },
    example: (props) => <ColumnHeaderRightActionPlaceholder size={props.size} />
  }
);
