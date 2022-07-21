<script>
export let grid = []
export let hide = false
function select ({ w = 100, h = 100, l = 0, t = 0 }) {
  hide = true
  const width = screen.availWidth * w / 100
  const height = screen.availHeight * h / 100
  const left = screen.availWidth * l / 100
  const top = screen.availHeight * t / 100
  resizeTo(width, height)
  moveTo(left, top)
}
</script>

{#each grid as item}
  {#if item instanceof Array}
    <svelte:self grid={item} bind:hide />
  {:else}
    {@const { w = 100, h = 100 } = item}
    <div style:width='{w}%' style:height='{h}%' class='itemborder pointer' on:click={() => select(item)}></div>
  {/if}
{/each}
