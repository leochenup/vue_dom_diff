//精细对比更新（不处理都有 children的情况）
import createElement from "./createElement";
import updateChildren from "./updateChildren";

export default function patchVnode(oldVnode, newVnode) {

  // 判断是否为同一个对象
  if (oldVnode === newVnode) return;
  // 判断 newVnode 是否有 text
  if (
    (newVnode.text !== undefined && newVnode.children == undefined) ||
    newVnode.children.length === 0
  ) {
    // newVnode 有 text 无 children
    if (newVnode.text !== oldVnode.text) {
      // newVnode text 与 oldVnode text 不同
      oldVnode.elm.innerText = newVnode.text;
    }
  } else {
    // newVnode 没有 text 有 children
    if (oldVnode.children === undefined || oldVnode.children.length === 0) {
      //oldVnode 没有 children
      oldVnode.elm.innerText = "";
      newVnode.children.forEach((child) => {
        oldVnode.elm.appendChild(createElement(child));
      });
    } else {
      // oldVnode newVnode 都有 children
      // 精细化对比
      updateChildren(oldVnode.elm, oldVnode.children, newVnode.children);
    }
  }
}
