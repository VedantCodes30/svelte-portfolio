<script lang="ts">
  import SectionHeadline from "$components/SectionHeadline.svelte";

  interface MyWorkSectionProps {
    projects: ProcessedProject[];
  }
  let { projects }: MyWorkSectionProps = $props();

  const mainProject = projects[0];
  const otherProjects = projects.slice(1);
</script>

<section class="mt-l">
  <SectionHeadline sectionName="my work">My Work</SectionHeadline>
  <div class="default-margin projects-container mt-m">
    <article class="main-project mb-m">
      <a href={`/work/${mainProject.slug}`}>
        <img
          src={mainProject.projectImageUrl}
          alt={mainProject.name}
          style="view-transition-name: image-project;"
        />
      </a>
      <div class="project-info mt-s">
        <div class="title-and-company">
          <h3 class="semi-bold">{mainProject.name}</h3>
          <p class="company dark-grey">{mainProject.company}</p>
        </div>
        <a href={`/work/${mainProject.slug}`} class="btn-to-article"> ➡️ </a>
      </div>
    </article>
    <div class="more-projects-container">
      {#each otherProjects as project}
        <article class="project">
          <a href={`/work/${project.slug}`}>
            <img src={project.projectImageUrl} alt={project.name} />
          </a>
          <div class="project-info mt-s">
            <div class="title-and-company">
              <h3 class="semi-bold">{project.name}</h3>
              <p class="company dark-grey">{project.company}</p>
            </div>
            <a href={`/work/${project.slug}`} class="btn-to-article"> ➡️ </a>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  img {
    width: 100%;
    border-radius: clamp(10px, 2vw, 20px);
    object-fit: cover;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  img:hover {
    transform: scale(1.02);
  }

  .more-projects-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: clamp(1rem, 3vw, 2rem);
  }

  .more-projects-container img {
    height: clamp(250px, 40vw, 350px);
  }

  .main-project img {
    max-height: clamp(300px, 50vw, 450px);
  }

  .project {
    width: 100%;
  }

  .project-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  .btn-to-article {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: clamp(1.5rem, 4vw, 3rem);
    border: 1px solid currentColor;
    border-radius: 50%;
    width: clamp(40px, 8vw, 60px);
    height: clamp(40px, 8vw, 60px);
    transition: all 0.3s ease;
    flex-shrink: 0;
  }

  .btn-to-article:hover {
    background-color: currentColor;
    color: white;
  }

  .company {
    font-size: clamp(0.875rem, 2.5vw, 1.125rem);
    margin-bottom: 0;
  }

  .title-and-company {
    flex: 1;
    min-width: 0;
  }

  .title-and-company h3 {
    margin-bottom: 0.25rem;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .more-projects-container {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .project-info {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.75rem;
    }

    .btn-to-article {
      align-self: flex-end;
    }
  }

  @media (max-width: 480px) {
    .more-projects-container {
      gap: 1rem;
    }

    .project-info {
      gap: 0.5rem;
    }
  }
</style>
