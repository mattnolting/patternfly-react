# PatternFly Figma Code Connect Integration Guide

## Introduction

This document serves as the definitive guide for implementing PatternFly component integrations with Figma's Code Connect feature. These integrations enable designers to generate accurate React code directly from Figma's Dev Mode, bridging the gap between design and development.

## Directory Structure

```
react-core
└── codeConnect
    └── components
        ├── AboutModal
        │   └── AboutModal.figma.tsx
        ├── Banner
        │   └── Banner.figma.tsx
        └── ...
```

## Implementation Patterns

### Basic Template

```typescript
import figma from "@figma/code-connect";
import { ComponentName } from '@patternfly/react-core';

/**
 * PatternFly ComponentName integration for Figma Code Connect
 */

figma.connect(
  ComponentName,
  "https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=XXX-XXX&m=dev",
  {
    props: {
      // Property mappings here
    },
    example: (props) => {
      // Compute values outside JSX

      return (
        <ComponentName
          // Apply props here
        >
          {/* Children if needed */}
        </ComponentName>
      );
    },
  },
);
```

### Property Mapping Patterns

#### 1. Direct Property Mapping

Map Figma properties directly to React props when property names and values match:

```typescript
figma.connect(
  Button,
  "https://www.figma.com/design/...",
  {
    props: {
      variant: figma.enum('Variant', {
        Primary: 'primary',
        Secondary: 'secondary',
        Tertiary: 'tertiary'
      }),
      label: figma.string('Label', 'Button text')
    },
    example: (props) => (
      <Button variant={props.variant}>
        {props.label}
      </Button>
    )
  }
);
```

#### 2. Derived Property Mapping

When a single Figma property needs to influence multiple React props:

```typescript
figma.connect(
  ActionList,
  "https://www.figma.com/design/...",
  {
    props: {
      isIconList: figma.enum('Type', {
        'Action icons only': true
      }),
      showKebab: figma.enum('Type', {
        'Single w Kebab': true
      })
    },
    example: (props) => (
      <ActionList isIconList={props.isIconList}>
        {props.showKebab && <KebabMenu />}
      </ActionList>
    )
  }
);
```

#### 3. Boolean Property Handling

For simple boolean toggles:

```typescript
// Correct implementation:
propName: figma.boolean("Property Name")

// INCORRECT implementation - DO NOT USE:
propName: figma.boolean("Property Name", false)
propName: figma.boolean("Property Name", true)
```

#### 4. Enum to Boolean Mapping

For Figma enum values that need to map to boolean props:

```typescript
isDisabled: figma.enum('State', {
  'Disabled': true
  // Other values will be undefined (falsy)
})
```

#### 5. Instance and Children Mapping

For components with nested elements:

```typescript
icon: figma.boolean("Has Icon", {
  true: figma.instance("Icon"),
  false: undefined
}),
menu: figma.boolean("Has Menu", {
  true: figma.children("Menu"),
  false: undefined
})
```

### Parent-Child Component Relationships

When implementing components that contain child components (like Menu with MenuItems or Accordion with AccordionItems), there are specific patterns to follow:

#### Using `figma.children()` for Child Components

For parent components with nested children:

```typescript
children: figma.children("*")
```

The wildcard `"*"` will match all child instances regardless of their layer names.

#### Pre-defined HTML Content for Complex Component Hierarchies

For complex parent-child relationships, pre-defined HTML content via `figma.enum()` often provides the most reliable results:

```typescript
menuType: figma.enum("Menu Type", {
  "Basic": <MenuItem>Item 1</MenuItem>
<MenuItem>Item 2</MenuItem>,
  "With Icons": <MenuItem icon={<EditIcon />}>Edit</MenuItem>
<MenuItem icon={<DeleteIcon />}>Delete</MenuItem>
})
```

This approach requires individual `.figma.tsx` files for each child component type, which must be connected separately.

### Conditional Rendering Guidelines

While property mappings should handle most variations, conditional rendering in JSX is appropriate in certain cases. The key is to determine when to use property mapping versus conditional rendering in your JSX.

### When to Use Conditional Rendering

Use conditional rendering in these specific cases:

#### 1. Structural Variations

When component structure changes significantly based on properties:

```typescript
// Example: Different button structures based on type
example: (props) => {
  // Compute all values outside JSX
  const isIconOnly = props.buttonType === "icon-only";

  return (
    <ActionListItem>
      {isIconOnly ? (
        // Icon-only button has completely different structure
        <Button variant="plain" aria-label={props.accessibleLabel}>
          <EditIcon />
        </Button>
      ) : (
        // Regular button has text content
        <Button variant={props.buttonVariant}>
          {props.buttonText}
        </Button>
      )}
    </ActionListItem>
  );
}
```

#### 2. Optional Elements

For elements that are either present or absent based on properties:

```typescript
// Example: Optional helper text in a form field
example: (props) => {
  // Compute all values outside JSX
  const hasHelperText = props.showHelperText;

  return (
    <FormGroup>
      <Label>{props.label}</Label>
      <Input value={props.value} />
      {hasHelperText && (
        <HelperText>
          {props.helperText}
        </HelperText>
      )}
    </FormGroup>
  );
}
```

#### 3. Hierarchical Components

For components with variable child structures:

```typescript
// Example: Navigation with conditional sections
example: (props) => {
  // Compute all values outside JSX
  const hasSecondaryItems = props.showSecondaryNav;

  return (
    <Navigation>
      <NavigationSection title="Primary">
        <NavigationItem>Item 1</NavigationItem>
        <NavigationItem>Item 2</NavigationItem>
      </NavigationSection>

      {hasSecondaryItems && (
        <NavigationSection title="Secondary">
          <NavigationItem>Secondary 1</NavigationItem>
          <NavigationItem>Secondary 2</NavigationItem>
        </NavigationSection>
      )}
    </Navigation>
  );
}
```

### Best Practices for Conditional Rendering

1. **Compute All Values Outside JSX**

   Always compute conditional values before the JSX return statement:

   ```typescript
   // Good
   example: (props) => {
     // Compute outside JSX
     const isExpanded = props.state === "expanded";

     return (
       <Component isExpanded={isExpanded} />
     );
   }

   // Bad - Don't do this
   example: (props) => (
     <Component isExpanded={props.state === "expanded"} />
   )
   ```

2. **Use Simple Conditionals**

   Use the most readable form of conditional for each case:

   - For optional elements: `{condition && <Element />}`
   - For binary choices: `{condition ? <ElementA /> : <ElementB />}`
   - For multiple options: Use computed values and simple conditionals

3. **Keep Conditionals Focused**

   Each conditional should control one aspect of the component's rendering:

   ```typescript
   // Good - Focused conditionals
   example: (props) => {
     const hasIcon = props.showIcon;
     const hasLabel = props.showLabel;

     return (
       <Button>
         {hasIcon && <Icon name={props.iconName} />}
         {hasLabel && <span>{props.label}</span>}
       </Button>
     );
   }

   // Bad - Mixed concerns
   example: (props) => {
     return (
       <Button>
         {props.showIcon && props.showLabel ? (
           <>
             <Icon name={props.iconName} />
             <span>{props.label}</span>
           </>
         ) : props.showIcon ? (
           <Icon name={props.iconName} />
         ) : props.showLabel ? (
           <span>{props.label}</span>
         ) : null}
       </Button>
     );
   }
   ```

4. **Comment Complex Conditionals**

   For more complex conditionals, add comments to explain the rendering logic:

   ```typescript
   example: (props) => {
     // Determine navigation behavior based on user role and permissions
     const canAccessAdmin = props.userRole === "admin";
     const showRestricted = props.hasSpecialPermission && props.isActiveUser;

     return (
       <Navigation>
         {/* Standard navigation for all users */}
         <NavItem to="/home">Home</NavItem>

         {/* Admin-only navigation */}
         {canAccessAdmin && (
           <NavItem to="/admin">Admin Dashboard</NavItem>
         )}

         {/* Special access content requiring multiple conditions */}
         {showRestricted && (
           <NavItem to="/restricted">Restricted Area</NavItem>
         )}
       </Navigation>
     );
   }
   ```

## Implementation Strategy

### 1. Verify Available Properties

Before implementing a `.figma.tsx` file for any PatternFly component:

1. Open the component in Figma's Dev Mode
2. Look at the "Component playground" panel
3. Document all available properties and their possible values
4. Only use properties that are visible in this panel
5. Match property names exactly (including capitalization and spacing)

### 2. Choose the Right Property Mapping Approach

Based on your component's complexity, choose the appropriate mapping strategy:

#### For Simple Components

Use direct property mapping with no conditional rendering:

```typescript
props: {
  variant: figma.enum('Type', {
    Primary: 'primary',
    Secondary: 'secondary'
  }),
  label: figma.string('Label')
},
example: (props) => (
  <Component variant={props.variant}>{props.label}</Component>
)
```

#### For Components with Derived Values

Use computed properties from a single Figma property:

```typescript
props: {
  isAlertVisible: figma.enum('State', {
    'Alert Visible': true
  }),
  isActive: figma.enum('State', {
    'Active': true
  })
},
example: (props) => {
  return (
    <Component isActive={props.isActive}>
      {props.isAlertVisible && <Alert>Important message</Alert>}
    </Component>
  );
}
```

#### For Components with Child Components

For parent components that contain child components (like Menu with MenuItems), use pre-defined content in enums:

```typescript
props: {
  menuVariant: figma.enum('Menu Variant', {
    'Basic': <MenuItem>Item 1</MenuItem>
<MenuItem>Item 2</MenuItem>,
    'With Icons': <MenuItem icon={<Icon />}>Icon Item</MenuItem>
<MenuItem>Regular Item</MenuItem>
  })
},
example: (props) => (
  <Menu>
    <MenuContent>
      {props.menuVariant}
    </MenuContent>
  </Menu>
)
```

#### For Complex Components with Structural Variations

Use a combination of property mapping and conditional rendering:

```typescript
props: {
  layout: figma.enum('Layout', {
    'Horizontal': 'horizontal',
    'Vertical': 'vertical',
    'Stacked': 'stacked'
  })
},
example: (props) => {
  // Pre-compute layout-dependent values
  const isHorizontal = props.layout === 'horizontal';
  const isStacked = props.layout === 'stacked';

  return (
    <Container>
      {isHorizontal ? (
        <HorizontalLayout>
          <LeftContent />
          <RightContent />
        </HorizontalLayout>
      ) : isStacked ? (
        <StackedLayout>
          <LayerOne />
          <LayerTwo />
          <LayerThree />
        </StackedLayout>
      ) : (
        <VerticalLayout>
          <TopContent />
          <BottomContent />
        </VerticalLayout>
      )}
    </Container>
  );
}
```

### 3. Apply Best Practices for Both Approaches

#### For Property Mapping

- Use `figma.enum()` to map Figma dropdown values to React props
- Use `figma.boolean()` for simple toggles (without a second argument)
- Use meaningful prop names that match the React component API

#### For Conditional Rendering

- Compute all values outside the JSX return statement
- Use simple conditional expressions (ternary, logical AND)
- Keep conditionals focused on one aspect of rendering
- Add comments for complex conditionals

### 4. Balance Simplicity and Flexibility

- For simple components, aim to eliminate conditional rendering entirely
- For complex components, use a hybrid approach with both property mappings and conditional rendering
- Always prioritize readability and maintainability
- Document particularly complex mapping relationships

## Component Examples

### Button Component (Simple Property Mapping)

```typescript
import figma from '@figma/code-connect';
import { Button } from '@patternfly/react-core';

/**
 * PatternFly Button integration for Figma Code Connect
 */
figma.connect(
  Button,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=154-12345&m=dev',
  {
    props: {
      // Map variant directly from Type
      variant: figma.enum('Type', {
        Primary: 'primary',
        Secondary: 'secondary',
        Tertiary: 'tertiary',
        Danger: 'danger',
        Link: 'link',
        Plain: 'plain',
        Control: 'control'
      }),

      // Map size
      size: figma.enum('Size', {
        Small: 'sm',
        Medium: 'md',
        Large: 'lg'
      }),

      // Map state to isDisabled
      isDisabled: figma.enum('State', {
        Disabled: true
      }),

      // Button text
      text: figma.string('Button Text', 'Button')
    },
    example: (props) => (
      <Button
        variant={props.variant}
        size={props.size}
        isDisabled={props.isDisabled}
      >
        {props.text}
      </Button>
    )
  }
);
```

### Menu Component (With Predefined Child Components)

```typescript
import figma from '@figma/code-connect';
import { Menu, MenuContent } from '@patternfly/react-core';

/**
 * PatternFly Menu integration for Figma Code Connect
 */

figma.connect(
  Menu,
  "https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2590-18585&t=IzSunfrnw18ti37Y-11",
  {
    props: {
      menuType: figma.enum("Menu", {
        "Basic": <MenuItem>Action 1</MenuItem>
<MenuItem>Action 2</MenuItem>
<MenuItem>Action 3</MenuItem>,
        "Plain Menu": <MenuItem>Plain item 1</MenuItem>
<MenuItem>Plain item 2</MenuItem>
<MenuItem>Plain item 3</MenuItem>,
        "With Actions": <MenuItem>Item with action
  <MenuItemAction>
    <EllipsisVIcon />
  </MenuItemAction>
</MenuItem>
<MenuItem>Another action item
  <MenuItemAction>
    <EllipsisVIcon />
  </MenuItemAction>
</MenuItem>,
        "With Separator": <MenuItem>First group item</MenuItem>
<Divider component="li" />
<MenuItem>Second group item</MenuItem>,
        "With Links": <MenuItem>Regular item</MenuItem>
<MenuItem to="#link-1">Link item</MenuItem>
<MenuItem to="https://www.example.com" isExternalLink>External link</MenuItem>,
        "With Icons": <MenuItem icon={<UsersIcon />}>Users</MenuItem>
<MenuItem icon={<CogIcon />}>Settings</MenuItem>
<MenuItem icon={<HelpIcon />}>Help</MenuItem>,
        "Titled Groups": <MenuGroup label="Group 1">
  <MenuItem>Group 1 item 1</MenuItem>
  <MenuItem>Group 1 item 2</MenuItem>
</MenuGroup>
<MenuGroup label="Group 2">
  <MenuItem>Group 2 item 1</MenuItem>
  <MenuItem>Group 2 item 2</MenuItem>
</MenuGroup>,
        "Option Select": <MenuItem itemId="option1" isSelected>Option 1</MenuItem>
<MenuItem itemId="option2">Option 2</MenuItem>
<MenuItem itemId="option3">Option 3</MenuItem>,
        "Item Checkbox": <MenuItem hasCheckbox isSelected>Selected item</MenuItem>
<MenuItem hasCheckbox>Unselected item</MenuItem>,
        "Danger": <MenuItem>Regular item</MenuItem>
<MenuItem isDanger>Danger item</MenuItem>,
      }),
      searchInput: figma.enum("Search input", {
        "None": "",
        "With search": <MenuSearch>
  <MenuSearchInput>
    <SearchInput placeholder="Search" />
  </MenuSearchInput>
</MenuSearch>
      })
    },
    example: (props) => (
      <Menu>
        {props.searchInput}
        <MenuContent>
          {props.menuType}
        </MenuContent>
      </Menu>
    )
  }
);
```

### Alert Component

```typescript
import figma from '@figma/code-connect';
import { Alert } from '@patternfly/react-core';

/**
 * PatternFly Alert integration for Figma Code Connect
 */

figma.connect(
  Alert,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1110-2587&m=dev',
  {
    props: {
      // Direct mapping of Type to variant
      variant: figma.enum('Type', {
        Info: 'info',
        Success: 'success',
        Warning: 'warning',
        Danger: 'danger',
        Custom: 'custom'
      }),
      // Title text
      title: figma.string('✏️ Title', 'Alert title'),
      // Map description toggle to boolean
      description: figma.boolean('Description'),
      // Description text content
      descriptionText: figma.string('✏️ Description', 'Alert description goes here'),
      // Map expandable toggle to isExpandable prop
      isExpandable: figma.enum('Expandable', {
        true: true
      }),
      // Map actions toggle to actionClose prop
      hasActionClose: figma.enum('Actions', {
        true: true
      })
    },
    example: (props) => (
      <Alert
        variant={props.variant}
        title={props.title}
        isExpandable={props.isExpandable}
        actionClose={props.hasActionClose ? {} : undefined}
      >
        {props.description ? props.descriptionText : null}
      </Alert>
    )
  }
);
```

### ActionList Component

```typescript
import figma from '@figma/code-connect';
import {
  ActionList,
  ActionListItem,
  Button,
  Dropdown,
  DropdownItem,
  DropdownList,
  MenuToggle
} from '@patternfly/react-core';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';
import TrashIcon from '@patternfly/react-icons/dist/esm/icons/trash-icon';
import EditIcon from '@patternfly/react-icons/dist/esm/icons/edit-icon';

/**
 * PatternFly ActionList component integration for Figma Code Connect
 */

figma.connect(
  ActionList,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=6780-15839&m=dev',
  {
    props: {
      // Core component properties
      isIconList: figma.enum('Type', {
        'Action icons only': true
      }),

      // Structural variations
      showKebab: figma.enum('Type', {
        'Single w Kebab': true
      }),
      hasMultipleGroups: figma.enum('Type', {
        'Multiple groups': true
      }),

      // Button styling properties
      firstButtonVariant: figma.enum('Type', {
        'Action icons only': 'plain',
        'modal form list': 'link',
        'Single group': 'primary',
        'Single w Kebab': 'primary',
        'Multiple groups': 'primary',
        'Wizard (Default)': 'primary'
      }),
      secondButtonVariant: figma.enum('Type', {
        'Action icons only': 'plain',
        'modal form list': 'link',
        'Single group': 'secondary',
        'Single w Kebab': 'secondary',
        'Multiple groups': 'secondary',
        'Wizard (Default)': 'secondary'
      }),

      // Button text properties
      firstButtonText: figma.enum('Type', {
        'modal form list': 'Edit',
        'Multiple groups': 'Primary action',
        'Single w Kebab': 'Primary action',
        'Single group': 'Primary action',
        'Wizard (Default)': 'Primary action'
      }),
      secondButtonText: figma.enum('Type', {
        'modal form list': 'Delete',
        'Multiple groups': 'Secondary action',
        'Single w Kebab': 'Secondary action',
        'Single group': 'Secondary action',
        'Wizard (Default)': 'Secondary action'
      }),

      // Optional elements
      withOptionalSteps: figma.boolean('With optional steps')
    },
    example: (props) => (
      <ActionList isIconList={props.isIconList}>
        {/* Group header when using multiple groups */}
        {props.hasMultipleGroups && <ActionListItem>Group 1</ActionListItem>}

        {/* First action - has different structure for icon-only mode */}
        <ActionListItem>
          {props.isIconList ? (
            <Button variant="plain" aria-label="Edit">
              <EditIcon />
            </Button>
          ) : (
            <Button variant={props.firstButtonVariant}>
              {props.firstButtonText}
            </Button>
          )}
        </ActionListItem>

        {/* Second action - has different structure for icon-only mode */}
        <ActionListItem>
          {props.isIconList ? (
            <Button variant="plain" aria-label="Delete">
              <TrashIcon />
            </Button>
          ) : (
            <Button variant={props.secondButtonVariant}>
              {props.secondButtonText}
            </Button>
          )}
        </ActionListItem>

        {/* Optional action that may not be present */}
        {props.withOptionalSteps && (
          <ActionListItem>
            <Button variant="link" icon={<PlusCircleIcon />}>
              {props.isIconList ? null : 'Optional action'}
            </Button>
          </ActionListItem>
        )}

        {/* Kebab menu that may not be present */}
        {props.showKebab && (
          <ActionListItem>
            <Dropdown
              isOpen={false}
              toggle={(toggleRef) => (
                <MenuToggle ref={toggleRef} variant="plain" aria-label="Actions" onClick={() => {}}>
                  <EllipsisVIcon />
                </MenuToggle>
              )}
            >
              <DropdownList>
                <DropdownItem key="action-1">Action 1</DropdownItem>
                <DropdownItem key="action-2">Action 2</DropdownItem>
                <DropdownItem key="action-3">Action 3</DropdownItem>
              </DropdownList>
            </Dropdown>
          </ActionListItem>
        )}

        {/* Second group that may not be present */}
        {props.hasMultipleGroups && (
          <>
            <ActionListItem>Group 2</ActionListItem>
            <ActionListItem>
              <Button variant="tertiary">Group 2 action</Button>
            </ActionListItem>
            <ActionListItem>
              <Button variant="tertiary">Group 2 action 2</Button>
            </ActionListItem>
          </>
        )}
      </ActionList>
    )
  }
);
```

## Implementing Parent-Child Component Relationships

### Understanding Child Components in Figma Code Connect

Figma refers to nested component references as "instances." To correctly handle parent-child relationships in Figma Code Connect, you need to understand these key concepts:

1. **Parent Components**: Components that contain other components (like Menu containing MenuItems)
2. **Child Components**: Components nested within parent components (like MenuItem within Menu)
3. **`figma.children()`**: Helper function that renders nested component instances
4. **`figma.instance()`**: Helper function for instance-swap properties
5. **`figma.nestedProps()`**: Helper function for accessing properties of nested components

### Approaches for Parent-Child Relationships

There are three primary approaches to implementing parent-child component relationships:

#### 1. Using `figma.children("*")`

This approach is useful when the child components need to be fully customizable in Figma:

```typescript
import figma from '@figma/code-connect';
import { Menu, MenuContent } from '@patternfly/react-core';

figma.connect(
  Menu,
  "https://www.figma.com/design/...",
  {
    props: {
      children: figma.children("*")
    },
    example: (props) => (
      <Menu>
        <MenuContent>
          {props.children}
        </MenuContent>
      </Menu>
    )
  }
);
```

#### 2. Using Pre-defined Content with `figma.enum()`

This approach provides more structured content options and is often more reliable:

```typescript
import figma from '@figma/code-connect';
import { Menu, MenuContent } from '@patternfly/react-core';

figma.connect(
  Menu,
  "https://www.figma.com/design/...",
  {
    props: {
      menuContent: figma.enum("Menu Type", {
        "Basic": <MenuItem>Item 1</MenuItem>
<MenuItem>Item 2</MenuItem>,
        "With Icons": <MenuItem icon={<UsersIcon />}>Users</MenuItem>
<MenuItem icon={<CogIcon />}>Settings</MenuItem>
      })
    },
    example: (props) => (
      <Menu>
        <MenuContent>
          {props.menuContent}
        </MenuContent>
      </Menu>
    )
  }
);
```

#### 3. Using `figma.nestedProps()` for Accessing Nested Component Properties

This approach is critical for components that contain nested components with their own set of properties:

```typescript
import { ErrorState, EmptyState } from '@patternfly/react-core';
import figma from "@figma/code-connect"

figma.connect(
  ErrorState,
  "https://www.figma.com/design/...",
  {
    props: {
      type: figma.enum("Type", {
        Default: "default",
        Custom: "custom",
      }),
      // Use nestedProps to access the nested EmptyState component's properties
      emptyStateProps: figma.nestedProps("Empty state", {
        size: figma.enum("Size", {
          Basic: "basic"
        }),
        type: figma.enum("Type", {
          Error: "error"
        }),
        bodyText: figma.string("Body text", "Default text"),
        headerText: figma.string("Header text", "Error Title")
      })
    },
    example: (props) => (
      <ErrorState
        variant={props.type}
      >
        <EmptyState
          variant={props.emptyStateProps.type}
          size={props.emptyStateProps.size}
          title={props.emptyStateProps.headerText}
          description={props.emptyStateProps.bodyText}
        />
      </ErrorState>
    )
  }
)
```

This example demonstrates how to use `figma.nestedProps()` to access and map properties from a nested component (EmptyState) within a parent component (ErrorState). This is particularly important for complex components where child components have their own configuration options.

### Important Rules for Parent-Child Implementations

1. **No Backticks**: Don't use backticks (``) or string delimiters around JSX content in enum values
2. **Separate Connect Files**: Each child component needs its own `.figma.tsx` file
3. **No Logic in JSX**: Avoid any conditional logic in the return statement
4. **Consistent Naming**: Use consistent naming between Figma and React components
5. **Nested Props Access**: Use `figma.nestedProps()` to access properties of nested components
6. **Component Hierarchy**: Respect the component hierarchy in the example function to match Figma's structure

## Common Issues and Solutions

### Validation Errors

#### "Property does not exist on the Figma component"

**Solution**:
- Only use properties visible in the Figma playground
- Match property names exactly (including capitalization and spaces)

#### "figma.boolean second argument should be an object literal"

**Solution**:
- Do not use a second argument with `figma.boolean()`
- For more complex boolean mappings, use `figma.enum()` instead

### Handling Complex Components

For very complex components, follow these steps:

1. Identify the core structural variations
2. Map each variation to a specific property
3. Use a combination of property mappings and conditional rendering
4. Document the relationship between Figma properties and React props

## Conclusion

This guide provides a comprehensive approach to implementing PatternFly component integrations with Figma's Code Connect feature. By following these patterns and best practices, you'll create a clean, maintainable bridge between the design system in Figma and PatternFly React components.

As Figma's Code Connect feature evolves, this document will be updated to reflect new capabilities and best practices.