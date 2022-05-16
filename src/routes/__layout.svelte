<script>
	import '../app.css';
	import { onMount } from 'svelte'
	import nightwind from '$lib/nwpp'
    
	onMount(()=>{
        nightwind.mount();
    })
</script>

<slot />
