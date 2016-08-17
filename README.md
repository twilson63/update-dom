# update-dom

A wrapper around the virtual-dom module that provides an update function.

```
const dom = require('update-dom')
const h = require('update-dom/h')

const update = dom(
  h('h1', ['Hello World'])
, document.querySelector('main')
)

// now I can update the dom using update
update(
  h('h1', ['Good Bye'])
)
```

## Dependencies

* virtual-dom

## API

## (tree, [ parent ]) -> update(newTree)

When requiring the module it returns a function that
takes a virtualDom Tree and optional parent node, then
returns an update function that takes the new virtualDom Tree. This function should be called every time you want to update the dom.

