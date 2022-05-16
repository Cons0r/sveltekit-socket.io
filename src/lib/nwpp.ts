import { writable } from 'svelte/store'
import type { Writable } from 'svelte/types/runtime/store'
type Typewind = {
    init(): string,
    beforeTransition(): void,
    toggle: () => void,
    enable: (dark: boolean) => void,
    oldtoggle: () => void,
    oldenable: (dark: boolean) => void,
    dark: Writable<boolean>,
    getDark: () => boolean,
    mount: () => void
}
import nightwind from 'nightwind/helper.js'
const nwind: Typewind = nightwind
nwind.dark = writable(false)
nwind.oldtoggle = nwind.toggle
nwind.oldenable = nwind.enable
nwind.getDark = () => {
    const persistedColorPreference = window.localStorage.getItem('nightwind-mode');
    const hasPersistedPreference = typeof persistedColorPreference === 'string';
    if (hasPersistedPreference) {
        return persistedColorPreference === "dark"? true:false;
    }
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const hasMediaQueryPreference = typeof mql.matches === 'boolean';
    if (hasMediaQueryPreference) {
        return mql.matches
    }
    return false;
}
nwind.mount = () => {
    // i do this otherwise i get Error(window is not defined)
    nwind.dark.set(nwind.getDark());
    (function() {
        function getInitialColorMode() {
            const persistedColorPreference = window.localStorage.getItem('nightwind-mode');
            const hasPersistedPreference = typeof persistedColorPreference === 'string';
            if (hasPersistedPreference) {
                return persistedColorPreference;
            }
            const mql = window.matchMedia('(prefers-color-scheme: dark)');
            const hasMediaQueryPreference = typeof mql.matches === 'boolean';
            if (hasMediaQueryPreference) {
                return mql.matches ? 'dark' : 'light';
            }
            return 'light';
        }
    getInitialColorMode() == 'light' ? document.documentElement.classList.remove('dark') : document.documentElement.classList.add('dark');
    })()
}
nwind.toggle = () => {
    let value: boolean;
	nwind.dark.subscribe(_ => value = _)();
    nwind.dark.set(!value)
    nwind.oldtoggle()
}
nwind.enable = (dark: boolean)=>{
    nwind.dark.set(dark)
    nwind.oldenable(dark)
}
export default nwind
