<script lang="ts">
	import { scale, fade } from 'svelte/transition';
	import { circInOut } from 'svelte/easing';
	export let title: string = "Title";
	export let message: string = "Message";
	export let yes: string = "Yes";
	export let no: string = "No";
	export let ok: string = "Ok";
	export let type: 'danger' | 'info' = "info"
	export let callback: (response:boolean) => void;
	export let show = false;
	function close(res:boolean) {
		show = false;
		callback(res)
	}
	export function open(titl?, messag?, ye?, n?) {
		title = titl
		message = messag
		yes = ye? ye:'Yes'
		no = n? n:'No'
		show = true;
	}
</script>
{#if show}
<!-- structure from Tailwind UI and svelte templating made by me -->
<div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true" transition:fade={{ duration: 500, easing: circInOut }}>
	<div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
	  <!--
		Background overlay, show/hide based on modal state.
  
		Entering: "ease-out duration-300"
		  From: "opacity-0"
		  To: "opacity-100"
		Leaving: "ease-in duration-200"
		  From: "opacity-100"
		  To: "opacity-0"
	  -->
	  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
  
	  <!-- This element is to trick the browser into centering the modal contents. -->
	  <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
  
	  <!--
		Modal panel, show/hide based on modal state.
  
		Entering: "ease-out duration-300"
		  From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
		  To: "opacity-100 translate-y-0 sm:scale-100"
		Leaving: "ease-in duration-200"
		  From: "opacity-100 translate-y-0 sm:scale-100"
		  To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
	  -->
	  <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" transition:scale="{{duration: 500, opacity: 0, start: 0.7, easing: circInOut}}">
		<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 tleft transition-colors text-[#BCBCBC] cursor-pointer hover:text-[#CCC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" on:click={type === 'info'?()=>{close(true)}:()=>{close(false)}}>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
		</svg>
		<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
		  <div class="sm:flex sm:items-start">
			<div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full {type==='danger'?'bg-red-100':'bg-blue-100'} sm:mx-0 sm:h-10 sm:w-10 transscale">
			  <svg class="h-6 w-6" class:text-red-600={type === 'danger'} class:text-blue-600={type === 'info'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
				{#if type === 'danger'}
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
				{:else}
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
				{/if}
			  </svg>
			</div>
			<div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
			  <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
				{title}
			  </h3>
			  <div class="mt-2">
				<p class="text-sm text-gray-500">
				  {message}
				</p>
			  </div>
			</div>
		  </div>
		</div>
		<div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
		  {#if type === 'danger'}
			<button on:click={()=>{close(false)}} type="button" class="transition-colors w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium bg-gray-200 text-black hover:bg-gray-300 ring-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">
				{no}
			</button>
		  {/if}
		  <button on:click={()=>{close(true)}} type="button" class="transition-colors mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 {type !== 'info'? 'bg-red-600 hover:bg-red-700 focus:ring-red-500 text-white':'bg-blue-600 hover:bg-blue-500 focus:ring-indigo-500 text-white'} text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
			{type==="info"?ok:yes}
		  </button>
		</div>
	  </div>
	</div>
  </div>
{/if}
<svelte:options accessors/>