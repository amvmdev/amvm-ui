# amvm-ui


## Installation
`npm install amvm-ui --save`

## Components


### Checkbox

Prop | Required | Description
--- | --- | ---
name | yes | string
checked | yes | boolean
onChange | yes | callback
...other | |


### FormGroupCheckbox

Prop | Required | Description
--- | --- | ---
name | yes | string
label | yes | string
checked | no | boolean
required | no | boolean
inline | no | boolean
onChange | yes | callback
errors | no | string or string[]
...other | |

### FormGroupCheckboxMeta

Prop | Required | Description
--- | --- | ---
meta | yes | meta object
inline | no | boolean
onChange | yes | callback
...other | |



### Dropdown

Prop | Required | Description
--- | --- | ---
name | yes | string
value | yes | string
disabled | no | boolean
onChange | yes | callback
onBlur | no | callback
refFn | no | ref function
...other | |


### FormGroupDropdown

Prop | Required | Description
--- | --- | ---
name | yes | string
label | yes | string
value | yes | string
values | yes | values parameter must be array of objects of following shape: { value: xxxx, text: 'yyyy'}
optionsLabel | no | label for options. Value will be 'set-null', and key will be -99999
disabled | no | boolean
required | no | boolean
onChange | yes | callback
onBlur | no | callback
errors | no | string or string[]
refFn | no | ref function
...other | |


### FormGroupDropdownMeta

Prop | Required | Description
--- | --- | ---
meta | yes | meta object
values | yes | values parameter must be array of objects of following shape: { value: xxxx, text: 'yyyy'}
optionsLabel | no | label for options. Value will be 'set-null', and key will be -99999
onChange | yes | callback
onBlur | no | callback
...other | |



### XXXXXXX

Prop | Required | Description
--- | --- | ---
xxxx | no |
...other | |