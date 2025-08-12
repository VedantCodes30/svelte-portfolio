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
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    padding: clamp(0.75rem, 2vw, 0.875rem) clamp(1.5rem, 4vw, 2.5rem);
    border-radius: clamp(6px, 1.5vw, 10px);
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    white-space: nowrap;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  .btn:hover {
    background-color: #333;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .btn:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  .nav-bar {
    padding: clamp(0.5rem, 2vw, 0.625rem) clamp(1rem, 3vw, 1.5rem);
    font-size: clamp(0.875rem, 2.5vw, 1.25rem);
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .btn {
      padding: clamp(0.625rem, 2.5vw, 0.75rem) clamp(1.25rem, 4vw, 1.5rem);
    }

    .nav-bar {
      padding: clamp(0.5rem, 2vw, 0.625rem) clamp(0.875rem, 3vw, 1.25rem);
    }
  }

  @media (max-width: 480px) {
    .btn {
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
    }

    .nav-bar {
      padding: 0.5rem 0.75rem;
      font-size: 0.875rem;
    }
  }

  /* Accessibility */
  @media (prefers-reduced-motion: reduce) {
    .btn {
      transition: none;
    }

    .btn:hover {
      transform: none;
    }
  }
</style>
