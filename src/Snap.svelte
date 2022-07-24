<script>
/** eslint-disable svelte/valid-compile **/
import Layout from './Layout.svelte'
const grids = [
  [
    { w: 50 },
    { w: 50, l: 50 }
  ],
  [
    { w: 70 },
    { w: 30, l: 70 }
  ],
  [
    { w: 50 },
    [
      { h: 50, w: 50, l: 50 },
      { h: 50, w: 50, l: 50, t: 50 }
    ]
  ],
  [
    { w: 33.3 },
    { w: 33.3, l: 33.3 },
    { w: 33.3, l: 66.6 }
  ],
  [
    [
      { h: 50, w: 50 },
      { h: 50, w: 50, t: 50 }
    ],
    [
      { h: 50, w: 50, l: 50 },
      { h: 50, w: 50, l: 50, t: 50 }
    ]
  ],
  [
    { w: 25 },
    { w: 50, l: 25 },
    { w: 25, l: 75 }
  ]
]

export let hide = true
export let fill = 'grey'
export let size = '2rem'
</script>

<!-- eslint-disable-next-line svelte/valid-compile -->
<svelte:options tag='snap-layout' />

<div {...$$restProps} class='position-relative' style:width={size} style:height={size}>
  <svg class='w-full p-1 pointer' on:click={() => { hide = !hide }} viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' {fill}><path d='M3 2L2 3V13L3 14H7L8 13V3L7 2H3ZM3 13V3H7V13H3Z'/><path d='M10 3L11 2H14L15 3V6L14 7H11L10 6V3ZM11 3V6H14V3H11Z'/><path d='M10 10L11 9H14L15 10V13L14 14H11L10 13V10ZM11 10V13H14V10H11Z'/></svg>
  <div class:d-none={hide} style:top={size} class='position-absolute border rounded shadow-lg right-0 w-450 d-flex flex-wrap justify-content-center bg-tp'>
    {#each grids as grid}
      <div class='d-flex flex-column flex-wrap rounded border w-200 h-100 overflow-hidden m-10'>
        <Layout bind:hide {grid}/>
      </div>
    {/each}
    <div class='d-none item'></div>
  </div>
</div>

<style>
  * {
    box-sizing: border-box;
  }
  .bg-tp {
    background-color: rgba(56, 57, 58, 0.363);
  }
  .overflow-hidden{
    overflow: hidden;
  }
  .border {
    border: 1px solid hsla(0, 0%, 100%, 0.2) !important;
  }
  .shadow-lg {
    box-shadow: 0 0.4rem 1.2rem hsla(0%, 0%, 0%, 0.4) !important;
  }
  .rounded {
    border-radius: .4rem !important;
  }
  .position-relative {
    position: relative;
  }
  .position-absolute {
    position: absolute;
  }
  .flex-wrap {
    flex-wrap: wrap !important;
  }
  .flex-column {
    flex-direction: column !important;
  }
  .justify-content-center {
    justify-content: center !important;
  }
  .right-0 {
    right: 0
  }
  .w-450 {
    width: 45rem
  }
  .w-200{
    width: 20rem;
  }
  .h-100{
    height: 10rem;
  }
  .m-10 {
    margin: 1rem;
  }
  .p-1 {
    padding: .1rem
  }
  .w-full {
    width: 100%
  }
  .d-flex{
    display: flex;
  }
  .d-none {
    display: none !important;
  }
  svg {
    color: white;
    border-radius: .4rem;
  }
  svg:hover {
    background-color: rgba(90, 93, 94, 0.31);
  }
  .pointer {
    cursor: pointer;
  }
  .item {
    background-color: rgba(90, 93, 94, 0.31);
    transition: background .2s ease;
  }
  .item:hover {
    background-color: #0179d4 !important;
  }
</style>
