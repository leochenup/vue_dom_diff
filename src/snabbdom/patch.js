import vnode from "./vnode";
import createElement from "./createElement";
import patchVnode from "./patchVnode";

export default function (oldVnode, newVnode) {
  //判断oldVnode是容器或老节点
  if (oldVnode.sel === "" || oldVnode.sel === undefined) {
    oldVnode = vnode(
      oldVnode.tagName.toLowerCase(),
      {},
      [],
      undefined,
      oldVnode
    );
  }
  // 为同一个节点
  if (oldVnode.sel === newVnode.sel && oldVnode.key === newVnode.key) {
    patchVnode(oldVnode, newVnode);
  } else {
    // 不是同一个节点 暴力拆除 重新渲染
    let dom = createElement(newVnode);
    oldVnode.elm.parentElement &&
      oldVnode.elm.parentElement.insertBefore(dom, oldVnode.elm),
      oldVnode.elm.remove();
  }
}
