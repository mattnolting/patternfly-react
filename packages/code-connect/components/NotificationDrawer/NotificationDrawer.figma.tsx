import figma from '@figma/code-connect';
import { NotificationDrawer } from '@patternfly/react-core';

figma.connect(
  NotificationDrawer,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=7172-99015&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      header: figma.children('Notification drawer header'),
      notifications: figma.children('Notifications'),
      group: figma.children('Notification drawer groups')
    },
    example: (props) => (
      // Documentation for NotificationDrawer can be found at https://www.patternfly.org/components/notification-drawer
      <NotificationDrawer>
        {props.header}
        {props.notifications}
        {props.group}
      </NotificationDrawer>
    )
  }
);
