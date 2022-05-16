import { c as create_ssr_component, b as add_attribute, d as subscribe, f as each, v as validate_component, e as escape } from "../../../chunks/index-d88a766f.js";
import { w as writable } from "../../../chunks/index-5d0df34e.js";
var Spaninput_svelte_svelte_type_style_lang = "";
const css = {
  code: "#txt.svelte-vsjx5m{border:none;color:#888;min-width:10px}#txt.svelte-vsjx5m:focus-visible{outline:none}#hide.svelte-vsjx5m{height:0;overflow:hidden;position:absolute;white-space:pre}",
  map: null
};
const Spaninput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value } = $$props;
  let txt;
  let hide;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$result.css.add(css);
  return `<span id="${"hide"}" class="${"svelte-vsjx5m"}"${add_attribute("this", hide, 0)}></span><input id="${"txt"}" type="${"text"}" class="${"svelte-vsjx5m"}"${add_attribute("value", value, 0)}${add_attribute("this", txt, 0)}>`;
});
function savable(key, value, start) {
  const base = writable(value, start);
  return {
    ...base,
    mount(localstore) {
      if (this.mounted)
        throw new Error("Already mounted");
      this.mounted = true;
      const json = localstore.getItem(key);
      if (json) {
        base.set(JSON.parse(json));
      }
      this.unsub = base.subscribe((current) => {
        localStorage.setItem(key, JSON.stringify(current));
      });
      console.log(this);
    },
    dismount(localstore) {
      if (!this.mounted)
        throw new Error("Not mounted");
      const json = JSON.parse(localstore.getItem(key));
      this.unsub();
      localstore.removeItem(key);
      return json;
    },
    unsub() {
      throw new Error("Cannot unsubscribe when not subscribed");
    }
  };
}
const Savable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $store, $$unsubscribe_store;
  const store = savable("Mystore", {});
  $$unsubscribe_store = subscribe(store, (value) => $store = value);
  let k = "Key";
  let v = "Value";
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${each(Object.entries($store), ([k2, v2]) => {
      return `${escape(k2)}: ${escape(v2)}<br>`;
    })}

${validate_component(Spaninput, "Spaninput").$$render($$result, { value: k }, {
      value: ($$value) => {
        k = $$value;
        $$settled = false;
      }
    }, {})}:${validate_component(Spaninput, "Spaninput").$$render($$result, { value: v }, {
      value: ($$value) => {
        v = $$value;
        $$settled = false;
      }
    }, {})}
<br><hr>
<button>Click to add <b>${escape(k)}</b>:<b>${escape(v)}</b>, Double click to delete <b>${escape(k)}</b></button>`;
  } while (!$$settled);
  $$unsubscribe_store();
  return $$rendered;
});
export { Savable as default };
