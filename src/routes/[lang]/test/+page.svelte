<script lang="ts">
    import Display from '$lib/Display.svelte';
    import { goto } from '$app/navigation';
    
    export let data
    console.log(data)

</script>
<button on:click={() => goto('/en/test')}>en</button>
<button on:click={() => goto('/fr/test')}>fr</button>

<Display path={data.pathName} />
