var b = Object.defineProperty;
var w = (o, e, t) => e in o ? b(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var c = (o, e, t) => w(o, typeof e != "symbol" ? e + "" : e, t);
import { defineComponent as z, computed as g, ref as p, onMounted as _, watch as x, openBlock as M, createElementBlock as y, normalizeClass as F, createElementVNode as h, normalizeStyle as S, toDisplayString as T, createApp as O, h as B } from "vue";
const E = {
  success: '<svg focusable="false" data-icon="check-circle" width="1em" height="1em" fill="#52c41a" aria-hidden="true" viewBox="64 64 896 896"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>',
  error: '<svg focusable="false" data-icon="close-circle" width="1em" height="1em" fill="#ff4d4f" aria-hidden="true" fill-rule="evenodd" viewBox="64 64 896 896"><path d="M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"></path></svg>',
  warning: '<svg focusable="false" data-icon="exclamation-circle" width="1em" height="1em" fill="#faad14" aria-hidden="true" viewBox="64 64 896 896"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path></svg>',
  loading: '<svg focusable="false" data-icon="loading" width="1em" height="1em" fill="#1677ff" aria-hidden="true" viewBox="0 0 1024 1024"><path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path></svg>',
  info: '<svg  focusable="false" data-icon="info-circle" width="1em" height="1em" fill="#1677ff" aria-hidden="true" viewBox="64 64 896 896"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path></svg>'
};
function L(o) {
  return E[o];
}
const k = ["innerHTML"], H = { class: "message-custom-content" }, R = /* @__PURE__ */ z({
  __name: "GlobalMessage",
  props: {
    type: {},
    content: {},
    timeout: {},
    themeColor: {},
    fontColor: {},
    onRemove: { type: Function },
    isFadingOut: { type: Boolean }
  },
  setup(o) {
    const e = o, t = g(() => e.type), a = g(() => L(e.type)), n = p(e.isFadingOut);
    _(() => {
      e.timeout > 0 && setTimeout(() => {
        n.value = !0;
      }, e.timeout);
    }), x(
      () => e.isFadingOut,
      (i) => {
        i && (n.value = !0);
      }
    );
    const r = (i) => {
      i.animationName.includes("fadeOut") && e.onRemove();
    };
    return (i, m) => (M(), y("div", {
      class: F(["message-item", t.value, { "fade-out": n.value }]),
      onAnimationend: r
    }, [
      h("div", {
        style: S({
          backgroundColor: e.themeColor,
          color: e.fontColor
        }),
        class: "message-content"
      }, [
        h("span", {
          class: "anticon",
          innerHTML: a.value
        }, null, 8, k),
        h("span", H, T(e.content), 1)
      ], 4)
    ], 34));
  }
}), I = (o, e) => {
  const t = o.__vccOpts || o;
  for (const [a, n] of e)
    t[a] = n;
  return t;
}, A = /* @__PURE__ */ I(R, [["__scopeId", "data-v-0757553b"]]), G = {
  boxSizing: "border-box",
  margin: "0",
  padding: "0",
  color: "rgba(0, 0, 0, 0.88)",
  fontSize: "14px",
  lineHeight: "1.5714285714285714",
  listStyle: "none",
  position: "fixed",
  top: "0",
  left: "50%",
  transform: "translateX(-50%)",
  width: "100%",
  pointerEvents: "none",
  zIndex: "1010"
};
class l {
  // 默认的全局字体颜色
  // 设置全局主题颜色
  static setGlobalTheme(e = {}) {
    e.themeColor && (this.globalThemeColor = e.themeColor), e.fontColor && (this.globalFontColor = e.fontColor);
  }
  static success(e, t = {}) {
    return this.showMessage("success", e, t);
  }
  static warn(e, t = {}) {
    return this.showMessage("warning", e, t);
  }
  static error(e, t = {}) {
    return this.showMessage("error", e, t);
  }
  static loading(e, t = {}) {
    return this.showMessage("loading", e, t);
  }
  static info(e, t = {}) {
    return this.showMessage("info", e, t);
  }
  static showMessage(e, t, a) {
    var f;
    const { timeout: n = 3e3, callBack: r, themeColor: i, fontColor: m } = a, v = i || this.globalThemeColor, C = m || this.globalFontColor;
    this.container || this.createContainer();
    const s = document.createElement("div");
    s.className = "message-item", (f = this.container) == null || f.appendChild(s);
    const d = p(!1);
    O({
      render: () => B(A, {
        type: e,
        content: t,
        timeout: n,
        themeColor: v,
        fontColor: C,
        isFadingOut: d.value,
        onRemove: () => this.handleRemove(s, r)
      })
    }).mount(s);
    const u = () => {
      d.value = !0;
    };
    return n > 0 && setTimeout(u, n), u;
  }
  static handleRemove(e, t) {
    setTimeout(() => {
      var a;
      e.remove(), ((a = this.container) == null ? void 0 : a.childElementCount) === 0 && (this.container.remove(), this.container = null), t && t();
    }, 500);
  }
  static createContainer() {
    this.container = document.createElement("div"), Object.assign(this.container.style, G), document.body.appendChild(this.container);
  }
}
c(l, "container", null), c(l, "globalThemeColor", "#fff"), // 默认的全局主题颜色
c(l, "globalFontColor", "#000");
const D = (o) => {
  o.config.globalProperties.$message = l;
};
export {
  l as Message,
  D as install
};
