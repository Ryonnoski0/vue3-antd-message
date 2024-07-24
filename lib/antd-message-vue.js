var f = Object.defineProperty;
var p = (n, e, t) => e in n ? f(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var m = (n, e, t) => p(n, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as v, computed as d, ref as y, onMounted as C, openBlock as _, createElementBlock as w, normalizeClass as x, createElementVNode as u, toDisplayString as z, createApp as M, h as b } from "vue";
const E = {
  success: '<svg focusable="false" data-icon="check-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>',
  error: '<svg focusable="false" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" fill-rule="evenodd" viewBox="64 64 896 896"><path d="M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"></path></svg>',
  warning: '<svg focusable="false" data-icon="exclamation-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path></svg>',
  loading: '<svg focusable="false" data-icon="loading" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024"><path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path></svg>',
  info: '<svg focusable="false" data-icon="info-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path></svg>'
};
function L(n) {
  return E[n];
}
const T = ["innerHTML"], B = { class: "message-custom-content" }, S = /* @__PURE__ */ v({
  __name: "GlobalMessage",
  props: {
    type: {},
    content: {},
    timeout: {}
  },
  setup(n) {
    const e = n, t = d(() => [e.type]), s = d(() => L(e.type)), a = y(!1);
    return C(() => {
      e.timeout > 0 && setTimeout(() => {
        a.value = !0;
      }, e.timeout);
    }), (i, c) => (_(), w("div", {
      class: x(["message-item", t.value, { "fade-out": a.value }])
    }, [
      u("i", {
        class: "anticon",
        innerHTML: s.value
      }, null, 8, T),
      u("p", B, z(i.content), 1)
    ], 2));
  }
}), I = (n, e) => {
  const t = n.__vccOpts || n;
  for (const [s, a] of e)
    t[s] = a;
  return t;
}, H = /* @__PURE__ */ I(S, [["__scopeId", "data-v-3df35e51"]]);
class g {
  static success(e, t, s) {
    return this.message("success", e, t, s);
  }
  static warn(e, t, s) {
    return this.message("warning", e, t, s);
  }
  static error(e, t, s) {
    return this.message("error", e, t, s);
  }
  static loading(e, t, s) {
    return this.message("loading", e, t, s);
  }
  static info(e, t, s) {
    return this.message("info", e, t, s);
  }
  static message(e, t, s = 3e3, a) {
    var l;
    this.container || this.createContainer();
    const i = document.createElement("div");
    i.className = "message-item", i.style.transition = "all 1s", (l = this.container) == null || l.appendChild(i);
    const c = M({
      render() {
        return b(H, { type: e, content: t, timeout: s });
      }
    });
    c.mount(i);
    let o;
    const r = () => {
      var h;
      clearTimeout(o), c.unmount(), i.remove(), ((h = this.container) == null ? void 0 : h.childElementCount) === 0 && (this.container.remove(), this.container = null), a && a();
    };
    return s > 0 && (o = setTimeout(() => {
      setTimeout(() => {
        r();
      }, 500);
    }, s)), r;
  }
  static createContainer() {
    this.container = document.createElement("div"), this.container.className = "message-container", this.container.style.position = "fixed", this.container.style.top = "20px", this.container.style.left = "50%", this.container.style.transform = "translateX(-50%)", this.container.style.zIndex = "9999", this.container.style.width = "100%", this.container.style.display = "flex", this.container.style.flexDirection = "column", this.container.style.alignItems = "center", this.container.style.pointerEvents = "none", document.body.appendChild(this.container);
  }
}
m(g, "container", null);
const V = {
  install(n) {
    n.config.globalProperties.$message = g;
  }
};
export {
  g as Message,
  V as default
};