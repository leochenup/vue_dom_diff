import vnode from "./vnode";

export default function (sel, data, c) {
  if (typeof c === "string" || typeof c === "number") {
    return vnode(sel, data, undefined, c, undefined);
  } else if (Array.isArray(c)) {
    let children = [];

    for (let i = 0; i < c.length; i++) {
      if (!(typeof c[i] === "object" && c[i].hasOwnProperty("sel")))
        throw new Error("数组项不对");
      children.push(c[i]);
    }
    return vnode(sel, data, children, undefined, undefined);
  } else if (typeof c === "object" && c.hasOwnProperty("sel")) {
    return vnode(sel, data, [c], undefined, undefined);
  } else {
    throw new Error("error 参数不对");
  }
}
