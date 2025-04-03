# Notes

## This is a good example of how properties in Figma and props in React would benefit from naming consistency

```jsx
  orientation: figma.enum('Direction', {
  Vertical: { default: 'vertical' }
}),
```

## Conditionally rendering props
```jsx
props.styleType === 'status' ? (
  <Banner status={props.status}>{props.children}</Banner>
) : (
  <Banner color={props.color}>{props.children}</Banner>
)
```

## Rendering children
```jsx

```

```jsx
  isDisabled={isRead ? undefined : props.isDisabled}
  isRead={isDisabled ? undefined : props.isRead}
```

## Conditionally rendering in component props
```jsx
  <Alert
    variant={props.variant}
    title={props.title}
    isExpandable={props.isExpandable}
    actionLinks={props.hasActions ? (
      <>
        <button className="pf-c-button pf-m-link pf-m-inline" type="button">Action</button>
        <button className="pf-c-button pf-m-link pf-m-inline" type="button">Action</button>
      </>
    ) : undefined}
  >
    {children}
  </Alert>
```
