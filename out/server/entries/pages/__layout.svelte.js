import { c as create_ssr_component } from "../../chunks/index-d88a766f.js";
import { w as writable } from "../../chunks/index-5d0df34e.js";
import nightwind from "nightwind/helper.js";
var app = "";
const nwind = nightwind;
nwind.dark = writable(false);
nwind.oldtoggle = nwind.toggle;
nwind.oldenable = nwind.enable;
nwind.getDark = () => {
  const persistedColorPreference = window.localStorage.getItem("nightwind-mode");
  const hasPersistedPreference = typeof persistedColorPreference === "string";
  if (hasPersistedPreference) {
    return persistedColorPreference === "dark" ? true : false;
  }
  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  const hasMediaQueryPreference = typeof mql.matches === "boolean";
  if (hasMediaQueryPreference) {
    return mql.matches;
  }
  return false;
};
nwind.mount = () => {
  nwind.dark.set(nwind.getDark());
  (function() {
    function getInitialColorMode() {
      const persistedColorPreference = window.localStorage.getItem("nightwind-mode");
      const hasPersistedPreference = typeof persistedColorPreference === "string";
      if (hasPersistedPreference) {
        return persistedColorPreference;
      }
      const mql = window.matchMedia("(prefers-color-scheme: dark)");
      const hasMediaQueryPreference = typeof mql.matches === "boolean";
      if (hasMediaQueryPreference) {
        return mql.matches ? "dark" : "light";
      }
      return "light";
    }
    getInitialColorMode() == "light" ? document.documentElement.classList.remove("dark") : document.documentElement.classList.add("dark");
  })();
};
nwind.toggle = () => {
  let value;
  nwind.dark.subscribe((_) => value = _)();
  nwind.dark.set(!value);
  nwind.oldtoggle();
};
nwind.enable = (dark) => {
  nwind.dark.set(dark);
  nwind.oldenable(dark);
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${slots.default ? slots.default({}) : ``}`;
});
export { _layout as default };
