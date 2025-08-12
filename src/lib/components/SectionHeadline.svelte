<script lang="ts">
  import type { Snippet } from "svelte";

  interface SectionHeadlineProps {
    children: Snippet;
    sectionName: string;
  }
  let { children, sectionName }: SectionHeadlineProps = $props();
</script>

<div class="default-margin section-headline" id={sectionName}>
  <h2>{@render children()}</h2>
  <div class="underscore"></div>
</div>

<style>
  .section-headline {
    margin-bottom: clamp(1rem, 3vw, 2rem);
  }

  h2 {
    margin-bottom: clamp(0.5rem, 1.5vw, 1rem);
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .section-headline {
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    .section-headline {
      margin-bottom: 1rem;
    }

    h2 {
      margin-bottom: 0.5rem;
    }
  }
</style>
