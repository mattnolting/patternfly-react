import figma from '@figma/code-connect';
import { Skeleton } from '@patternfly/react-core';


figma.connect(
  Skeleton,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=790-288&m=dev',
  {
    props: {
      size: figma.enum('Size', {
        S: 's',
        M: 'm',
        L: 'l',
        XL: 'xl',
        '2XL': '2xl',
        '3XL': '3xl',
        '4XL': '4xl'
      }),
      type: figma.enum('Type', {
        Default: 'default',
        Rectangle: 'rectangle',
        Square: 'square',
        Circle: 'circle'
      })
    },
    example: (props) => <Skeleton size={props.size} type={props.type} />
  }
);
