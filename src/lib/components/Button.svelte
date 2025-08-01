<script lang="ts">
  export let className: string = "";
  export let onClick: (e: MouseEvent) => void = () => {};
</script>

<button class={`btn ${className}`} on:click={onClick}>
  <slot />
</button>

<style>
  .btn {
    font-family: Inter;
    font-weight: 500;
    background-color: black;
    color: white;
    font-size: 1.5rem;
    padding: 14px 40px;
    border-radius: 10px;
  }
  .nav-bar {
    padding: 10px 24px;
    font-size: 20px;
  }
</style>
