<script lang="ts">
    import { getFlash } from 'sveltekit-flash-message';
    import { page } from '$app/stores';
    const flash = getFlash(page);
</script>

{#if $flash?.message}
    <h1>{$flash?.message}</h1>
{/if}
