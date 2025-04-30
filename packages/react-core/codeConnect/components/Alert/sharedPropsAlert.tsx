// sharedPropsAlert.tsx
import figma from '@figma/code-connect';

// Make sure you're exporting as a named export
export const sharedAlertProps = {
  actionLinks: figma.boolean('Actions'),
  alertDescription: figma.boolean('Description', {
    true: figma.string('✏️ Description'),
    false: undefined
  }),
  isExpandable: figma.boolean('Expandable'),
  title: figma.string('✏️ Title'),
  variant: figma.enum('Type', {
    Custom: 'custom',
    Danger: 'danger',
    Info: 'info',
    Success: 'success',
    Warning: 'warning'
  })
};
