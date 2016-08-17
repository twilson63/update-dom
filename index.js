const { create, diff, patch } = require('virtual-dom')

module.exports = function (tree, parent) {
  if (!tree) return new Error('dom tree required!')
  var appNode = create(tree)
  parent = parent ? parent : document.body

  parent.appendChild(appNode)

  return function update (newTree) {
    const patches = diff(tree, newTree)
    appNode = patch(appNode, patches)
    tree = newTree
  }
}