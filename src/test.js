// import {
//   init,
//   classModule,
//   propsModule,
//   styleModule,
//   eventListenersModule,
//   h,
// } from "snabbdom";

// const patch = init([
//   classModule,
//   propsModule,
//   styleModule,
//   eventListenersModule,
// ]);

// const container = document.createElement("div");
// const button = document.createElement("button");
// button.innerHTML = "改变DOM";
// document.body.appendChild(button);
// container.setAttribute("id", "container");
// document.body.appendChild(container);

// const vnode1 = h("ul", {}, [
//   h("li", { key: "A" }, "A"),
//   h("li", { key: "B" }, "B"),
//   h("li", { key: "C" }, "C"),
//   h("li", { key: "D" }, "D"),
// ]);

// const vnode2 = h("ul", {}, [
//   h("li", { key: "E" }, "E"),
//   h("li", { key: "A" }, "A"),
//   h("li", { key: "B" }, "B"),
//   h("li", { key: "C" }, "C"),
//   h("li", { key: "D" }, "D"),
// ]);

// patch(container, vnode1);

// button.onclick = function () {
//   patch(vnode1, vnode2); // 改变 vnode
// };
