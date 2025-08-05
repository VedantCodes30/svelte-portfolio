<script lang="ts">
  import { Header } from "$components";
  import { Footer } from "$components";
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

<Header />

{@render children()}
<Footer />
