<script lang="ts">
  import SectionHeadline from "$components/SectionHeadline.svelte";

  interface SkillsSectionProps {
    skills: Skill[];
  }
  let { skills }: SkillsSectionProps = $props();
</script>

<section class="mt-l">
  <SectionHeadline sectionName="Skills">Skills</SectionHeadline>
  <div class="wrapper default-margin">
    <div class="skills-container mt-m">
      {#each skills as skill}
        <i class={skill.iconClass} title={skill.name}></i>
      {/each}
    </div>
  </div>
</section>

<style>
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .skills-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    gap: clamp(1rem, 3vw, 1.5rem);
    width: 100%;
    max-width: 800px;
    justify-items: center;
    align-items: center;
  }

  i {
    font-size: clamp(2.5rem, 6vw, 4rem);
    transition:
      transform 0.3s ease,
      opacity 0.3s ease;
    cursor: pointer;
  }

  i:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .skills-container {
      grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
      gap: 1rem;
    }
  }

  @media (max-width: 480px) {
    .skills-container {
      grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
      gap: 0.75rem;
    }

    i {
      font-size: clamp(2rem, 5vw, 2.5rem);
    }
  }
</style>
