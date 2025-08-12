<script lang="ts">
  import { goto } from "$app/navigation";
  import { Button } from "$components";

  function onClick() {
    goto("/#contact-form");
  }
</script>

<section class="hero-section default-margin">
  <h3>Hello! I'm Vedant</h3>
  <div class="underscore mb-m"></div>
  <h1>I'm a Frontend developer crafting intutive and performant</h1>
  <h1 class="dark-grey mb-m">Web Experinces</h1>
  <Button {onClick}>Let's Talk</Button>
</section>

<style>
  .hero-section {
    padding-top: clamp(2rem, 6vw, 3.75rem);
    text-align: left;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .hero-section {
      text-align: center;
      padding-top: clamp(1.5rem, 4vw, 2rem);
    }
  }

  @media (max-width: 480px) {
    .hero-section {
      padding-top: 1rem;
    }
  }
</style>
