import { ActionList } from 'src/components/ActionList';
import figma from '@figma/code-connect';


/**
  * Overflow footer example
  */
figma.connect(
  ActionList,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6%3A-Components-Test?node-id=6780-15839&m=dev',
  {
    props: {
      // Map Type variant to component props
      typeVariant: figma.enum('Type', {
        'Single group': {
          variant: 'single-group',
          hasKebab: false,
          isWizard: false,
          isModal: false,
          iconsOnly: false
        },
        'Single w Kebab': {
          variant: 'single-group',
          hasKebab: true,
          isWizard: false,
          isModal: false,
          iconsOnly: false
        },
        'Action icons only': {
          variant: 'icons-only',
          hasKebab: false,
          isWizard: false,
          isModal: false,
          iconsOnly: true
        },
        'Wizard (Default)': {
          variant: 'wizard',
          hasKebab: false,
          isWizard: true,
          isModal: false,
          iconsOnly: false
        },
        'modal form list': {
          variant: 'modal',
          hasKebab: false,
          isWizard: false,
          isModal: true,
          iconsOnly: false
        },
        'Multiple groups': {
          variant: 'multiple-groups',
          hasKebab: false,
          isWizard: false,
          isModal: false,
          iconsOnly: false
        }
      })

      // If the component needs more options, add them here
      // colorScheme: figma.enum('Semantic Color Tokens', {
      //   'Auto (Light)': 'light',
      //   Dark: 'dark'
      // })
    },
    example: (props) => {
      // Extract individual props from the variant
      const { variant, hasKebab, isWizard, isModal, iconsOnly } = props.typeVariant;

      // Here we create a simple example for preview
      // Modify this to match the actual component API
      return (
        <ActionList variant={variant} hasKebab={hasKebab} isWizard={isWizard} isModal={isModal} iconsOnly={iconsOnly}>
          {/* Conditionally render different action items based on the variant */}
          {(variant === 'multiple-groups' || variant === 'single-group') && (
            <>
              <button>Back</button>
              <button>Next</button>
              <button>Submit</button>
              <button>Cancel</button>
            </>
          )}
          {/* Add other conditional content for different variants */}
        </ActionList>
      );
    }
  }
);
