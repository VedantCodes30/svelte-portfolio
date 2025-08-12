<script lang="ts">
  import { goto } from "$app/navigation";
  import { Button } from "$components";
  import { onMount } from "svelte";

  let isMenuOpen = false;
  let isMobile = false;

  function goToContactForm() {
    goto("#contact-form");
    isMenuOpen = false; // Close menu after navigation
  }

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function closeMenu() {
    isMenuOpen = false;
  }

  onMount(() => {
    const checkMobile = () => {
      isMobile = window.innerWidth <= 768;
      if (!isMobile) {
        isMenuOpen = false;
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  });
</script>

<nav class="navbar default-margin">
  <a href="/" class="logo">VC</a>

  <!-- Desktop Navigation -->
  <div class="navbar-links desktop-nav">
    <a href="/#about-me" class="nav-link">About Me</a>
    <a href="/#my-work" class="nav-link">Work</a>
    <Button className="nav-bar" onClick={goToContactForm}>Contact</Button>
  </div>

  <!-- Mobile Menu Button -->
  <button
    class="mobile-menu-btn"
    on:click={toggleMenu}
    aria-label="Toggle menu"
  >
    <span class="hamburger-line"></span>
    <span class="hamburger-line"></span>
    <span class="hamburger-line"></span>
  </button>

  <!-- Mobile Navigation -->
  <div class="mobile-nav {isMenuOpen ? 'open' : ''}">
    <a href="/#about-me" class="nav-link" on:click={closeMenu}>About Me</a>
    <a href="/#my-work" class="nav-link" on:click={closeMenu}>Work</a>
    <Button className="nav-bar" onClick={goToContactForm}>Contact</Button>
  </div>
</nav>

<style>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    position: relative;
  }

  .logo {
    font-size: clamp(1.5rem, 4vw, 2.1875rem);
    font-weight: 500;
    z-index: 1001;
  }

  .navbar-links {
    display: flex;
    align-items: center;
    gap: clamp(2rem, 4vw, 3.75rem);
  }

  .navbar-links a:hover {
    text-decoration: underline;
  }

  .nav-link {
    transition: color 0.3s ease;
  }

  .nav-link:hover {
    color: #5e5e5e;
  }

  /* Mobile Menu Button */
  .mobile-menu-btn {
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 25px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1001;
  }

  .hamburger-line {
    width: 100%;
    height: 3px;
    background-color: currentColor;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  /* Mobile Navigation */
  .mobile-nav {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.95);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .mobile-nav.open {
    opacity: 1;
    visibility: visible;
  }

  .mobile-nav .nav-link {
    font-size: 1.5rem;
    color: white;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .desktop-nav {
      display: none;
    }

    .mobile-menu-btn {
      display: flex;
    }

    .mobile-nav {
      display: flex;
    }

    .navbar {
      padding: 1rem;
    }
  }

  @media (min-width: 769px) {
    .mobile-menu-btn,
    .mobile-nav {
      display: none;
    }
  }
</style>
