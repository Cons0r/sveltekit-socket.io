import type { Writable, StartStopNotifier, Unsubscriber } from 'svelte/types/runtime/store';
import { writable } from 'svelte/store';
/**
 * @author maverick-dev-55
 * @description attach a writable to localstorage
 * @example <caption>Intended and working usage</caption>
 * import { onMount } from 'svelte';
 * import { writable } from 'svelte/store';
 * const store = writable(); // or import your writable
 * import savewritable from '$lib/savewritable';
 * onMount(()=>{
 *      savewritable(store)
 * }
 * @param writable The writable you want to save
 * @param key The localstorage key you want to save the writable as. default is 'store'
 */
const attach = (writable: Writable<unknown>, key='store'): void =>{
    const json = localStorage.getItem(key);
    if (json) {
       writable.set(JSON.parse(json));
    }

    writable.subscribe(current => {
        localStorage.setItem(key, JSON.stringify(current));
    });
}
interface TSavable<T> extends Writable<T> {
    mount(localstore: Storage): void
    dismount(localstore: Storage): JSON
    unsub: Unsubscriber
}
/**
 * @author maverick-dev-55
 * @description create a savable, a writable with a built in mount function, similar to attach
 * @example <caption>Intended and working usage</caption>
 * import { onMount } from 'svelte';
 * import savable from 'svelte/store';
 * const store = savable('todos', {});
 * import savewritable from '$lib/savewritable';
 * onMount(()=>{
 *      store.mount()
 *      //after already mounted you can dismount
 *      store.dismount()
 * }
 * @param key Local Storage key
 * @param value value? in writable
 * @param start start? in writable
 * @returns {TSavable<T>}
 */
function savable<T>(key: string, value?: T, start?: StartStopNotifier<T>): TSavable<T>{
    const base = writable(value, start)
    return {
        ...base,
        mount(localstore) {
            if(this.mounted) throw new Error("Already mounted");
            this.mounted = true;

            const json = localstore.getItem(key);
            if (json) {
                base.set(JSON.parse(json));
            }

            this.unsub = base.subscribe(current => {
                localStorage.setItem(key, JSON.stringify(current));
            });
            console.log(this)
        },
        dismount(localstore) {
            if(!this.mounted) throw new Error("Not mounted");
            const json = JSON.parse(localstore.getItem(key))
            this.unsub()
            localstore.removeItem(key)
            return json
        },
        unsub() {
           throw new Error('Cannot unsubscribe when not subscribed')
        }
    }
}
export {
    attach,
    savable
};
export default savable;
