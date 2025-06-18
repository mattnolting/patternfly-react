import { NotificationDrawerHeader } from '@patternfly/react-core';
import figma from '@figma/code-connect';

// Documentation for NotificationDrawerHeader can be found at https://www.patternfly.org/components/notification-drawer

figma.connect(
  NotificationDrawerHeader,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=3170-17841',
  {
    props: {
      showUnreadCount: figma.boolean('Show unread count', {
        true: 3,
        false: NaN
      }),
      hasActionsMenu: figma.boolean('Has actions menu'),
      unreadCount: figma.string('Unread count'),
      headingText: figma.string('Heading text'),
      children: figma.children('*')
    },
    example: (props) => (
      <NotificationDrawerHeader count={props.showUnreadCount} title={props.headingText}>
        {props.children}
      </NotificationDrawerHeader>
    )
  }
);
