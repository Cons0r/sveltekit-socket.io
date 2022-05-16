<script>
import { onMount } from "svelte";


    export let value;
    let txt;
    let hide;
    onMount(() => {
        resize();
        txt.addEventListener("input", resize);
        function resize() {
            hide.textContent = txt.value;
            txt.style.width = hide.offsetWidth + "px";
        }
    })
</script>
<span id="hide" bind:this={hide}></span><input id="txt" type="text" bind:value bind:this={txt}>
<style>
    #txt {
        border: none;
        color: #888;
        min-width: 10px;
    }

    #txt:focus-visible {
        outline: none;
    }

    #hide {
        position: absolute;
        height: 0;
        overflow: hidden;
        white-space: pre;
    }
</style>
