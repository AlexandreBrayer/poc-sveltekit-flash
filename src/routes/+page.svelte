<script lang="ts">
  import { onMount } from "svelte";
  import "img-comparison-slider";
  let isClient = false;
  onMount(() => {
    isClient = true;
  });
</script>

{#if isClient}
  <img-comparison-slider>
    <img
      alt="orange white"
      slot="first"
      src="https://placehold.co/600x400/orange/white"
    />
    <img
      alt="white orange"
      slot="second"
      src="https://placehold.co/600x400/white/orange"
    />
  </img-comparison-slider>
{:else}
  <img
    alt="orange white"
    src="https://placehold.co/600x400/orange/white"
  />
{/if}
