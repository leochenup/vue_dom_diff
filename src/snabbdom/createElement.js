//vnode 创建为 DOM
export default function createElement(vnode) {
  let domNode = document.createElement(vnode.sel);
  if (
    (vnode.text !== "" && vnode.children === undefined) ||
    vnode.children.length === 0
  ) {
    //内部是文字
    domNode.innerText = vnode.text;
  } else if (Array.isArray(vnode.children) && vnode.children.length > 0) {
    // 内部是子子元素
    vnode.children.forEach((child) => {
      //递归生成子节点
      domNode.appendChild(createElement(child));
    });
  }
  vnode.elm = domNode;

  return domNode;
}
