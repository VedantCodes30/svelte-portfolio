<script lang="ts">
  import { Header } from "$components";
  import { Footer } from "$components";
  import { lenis } from "lenis-svelte";
  import "../app.css";
  let { children } = $props();

  import { onNavigate } from "$app/navigation";

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<main use:lenis>
  <Header />
  {@render children()}
  <Footer />
</main>
