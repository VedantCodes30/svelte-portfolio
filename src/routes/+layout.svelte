<script lang="ts">
  import { Header } from "$components";
  import { Footer } from "$components";
  import "../app.css";
  let { children } = $props();
</script>

<Header />
{@render children()}
<Footer />
