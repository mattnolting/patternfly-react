import figma from '@figma/code-connect';
import { TreeView } from '@patternfly/react-core';

figma.connect(
  TreeView,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=12615-3521&m=dev',
  {
    props: {
      options: {
        name: 'Application launcher',
        id: 'example5-AppLaunch',
        children: [
          {
            name: 'Application 1',
            id: 'example5-App1',
            children: [
              { name: 'Settings', id: 'example5-App1Settings' },
              { name: 'Current', id: 'example5-App1Current' }
            ]
          }
        ]
      },
      isCompact: figma.enum('Type', {
        'With Background': 'compact',
        'Without Background': 'compactNoBackground'
      })
    },
    example: (props) => (
      // Documentation for TreeView can be found at https://www.patternfly.org/components/tree-view
      <TreeView variant={props.isCompact} data={props.options} />
    )
  }
);
