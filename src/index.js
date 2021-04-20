import { h, patch } from "./snabbdom";

const container = document.createElement("div");
container.setAttribute("id", "container");
document.body.appendChild(container);
const button = document.querySelector("button");

let vnode1 = h("ul", {}, [
  h("li", { key: "A" }, "AA"),
  h("li", { key: "B" }, "BB"),
  h("li", { key: "Q" }, "qq"),
  h("li", { key: "C" }, "CC"),
  h("li", { key: "W" }, "WW"),
]);

patch(container, vnode1);

let vnode2 = h("ul", {}, [
  h("li", { key: "B" }, "BB"),
  h("li", { key: "Q" }, "qq"),
]);
button.onclick = function () {
  patch(vnode1, vnode2);
};
