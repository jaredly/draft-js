"use strict";

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * 
 * @emails oncall+draft_js
 */
function isInstanceOfNode(target) {
  // we changed the name because of having duplicate module provider (fbjs)
  if (!target || !('ownerDocument' in target)) {
    return false;
  }

  if ('ownerDocument' in target) {
    var node = target;

    if (!node.ownerDocument.defaultView) {
      return node instanceof Node;
    } // $FlowFixMe https://github.com/DefinitelyTyped/DefinitelyTyped/issues/11508#issuecomment-256045682


    if (node instanceof node.ownerDocument.defaultView.Node) {
      return true;
    }
  }

  return false;
}

module.exports = isInstanceOfNode;