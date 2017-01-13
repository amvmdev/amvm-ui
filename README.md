# amvm-ui


## Installation
`npm install amvm-ui --save`

## Components


### Input


Prop | Required | Description
--- | --- | ---
meta | no | Form model meta object.
type | no | Type of input element. Allowed types: `text`, `password`, `textarea`, `radio`, `checkbox`. If not set, default is `text`.
refFn | no | Ref callback function. This function will be assign to `ref` prop on `<input/>` element. 

This component renders just `<input>` with passed props. If `className` is not set, default value `form-control` is assigned to `className` (except when type is `radio` or `checkbox`). 
Passed props will overwrite attributes that are set using meta object.



### FormGroupInput


Prop | Required | Description
--- | --- | ---
meta | no | Form model meta object.
labelText | no | Text for `<label>` tag. First, meta's `title` property is used to set `<label>` text, then this props can overwrite it.
type | no | Type of input element. Allowed types: `text`, `password`, `textarea`, `radio`, `checkbox`. This prop is passed into `<Input>` component.
parentStyle | no | Css rules that will be applied to container div element.
refFn | no | Ref callback function. This function will be assign to `ref` prop on `<input/>` element.

If meta has `errors` array with length > 0, then we add `has-error` css class to specific html tag.

**If type is `text`, output is:**
```Javascript
<div className='form-group {has-error}' style={parentStyle}>
    <label for="id" className='control-label'>Label text</label>
    <Input {...targetProps} type={type} />
    <FormGroupError error={meta ? meta.errors : null} />
</div>
```

**If type is `radio` or `checkbox`, output is:**
```Javascript
<div className='radio|checkbox {has-error}' style={parentStyle}>
    <label className='control-label'>
        <Input {...targetProps} type={type} /> {labelText}
        <FormGroupError error={meta ? meta.errors : null} />
    </label>
</div>
```


### FormGroup

Prop | Required | Description
--- | --- | ---
success | no | if set to true, `has-success` css class will be added
warning | no | if set to true, `has-warning` css class will be added
error | no | if set to true, `has-error` css class will be added

This component renders `<div className='form-group has-success|has-warning|has-error />`. Value set to `className` prop will be added to list of css classes.


### Dropdown

Prop | Required | Description
--- | --- | ---
meta | no | Form model meta object.
source | no | Array of object. This is array will be used to create `<option>` tags if `children` props is null.
valueField | no | Name of object property that will be used for `value` attribute when building `<option>` tag using `source` prop.
textField | no | Name of object property that will be used as a content when building `<option>` tag using `source` prop.
optionsLabel | no | If set, it will be first `<option>` with value of `set-null` and key of `-99999` when building `<option>` tag using `source` prop
refFn | no | Ref callback function. This function will be assign to `ref` prop on `<input/>` element.

This is the order on how dropdown will build `<option>` tags:
1. If there are children for `<Dropdown>` component, they will be used as dropdown options.
2. If meta has `dropdownValues` property, then this property will be looped and for each array item `<option>` will be created. Each array item should be object of type `{ value: 'xx', text: 'yy' }`
3. If dropdown has `source`, `valueField`, `textField`, then these props will be used to create `<option>` tags.


### FormGroupDropdown

Prop | Required | Description
--- | --- | ---
meta | no | Form model meta object.
source | no | Array of object. This is array will be used to create `<option>` tags if `children` props is null.
valueField | no | Name of object property that will be used for `value` attribute when building `<option>` tag using `source` prop.
textField | no | Name of object property that will be used as a content when building `<option>` tag using `source` prop.
optionsLabel | no | If set, it will be first `<option>` with value of `set-null` and key of `-99999` when building `<option>` tag using `source` prop
labelText | no | Text for `<label>` tag. First, meta's `title` property is used to set `<label>` text, then this props can overwrite it.
parentStyle | no | Css rules that will be applied to container div element.
refFn | no | Ref callback function. This function will be assign to `ref` prop on `<input/>` element.

Component creates `<div className='form-control {has-error}' />` and passes all props to `<Dropdown />` child component.


