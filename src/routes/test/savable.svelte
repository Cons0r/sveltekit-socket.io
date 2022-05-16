<script lang=ts>
    import Spaninput from "$lib/components/Spaninput.svelte";
    import savable from "$lib/savable";
    import { onMount } from "svelte";
    const store = savable('Mystore', {});
    onMount(()=>{
        store.mount(localStorage)
    })
    let k = "Key";
    let v = "Value";
    function del() {
        store.update(s=>{
            let ns = s;
            delete ns[k]
            return ns
        })
    }
    function add() {
        store.update(s=>{
            s[k] = v
            return s
        })
    }
</script>
{#each Object.entries($store) as [ k, v ]}
{k}: {v}<br>
{/each}

<Spaninput bind:value={k}></Spaninput>:<Spaninput bind:value={v}></Spaninput>
<br><hr>
<button on:click|preventDefault={add} on:dblclick|preventDefault={del}>Click to add <b>{k}</b>:<b>{v}</b>, Double click to delete <b>{k}</b></button>
