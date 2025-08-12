<script lang="ts">
  import type { DevExperience } from "$lib/types/sanity";

  interface AboutMeProps {
    workExperience: DevExperience[];
  }
  let { workExperience } = $props();
</script>

<section class="default-margin work-experience mt-m">
  <div class="work-experience-content">
    <ul class="work-experience-list">
      {#each workExperience as job}
        <li class="work-item">
          <article>
            <h3 class="semi-bold mb-xs">
              {job.jobTitle}
            </h3>
            <div class="company-and-date">
              <p class="dark-grey company-name">{job.company}</p>
              <p class="dark-grey date-range">
                {job.startDate?.slice(0, 7)}
                {#if job.endDate}
                  / {job.endDate.slice(0, 7)}
                {:else}
                  / present
                {/if}
              </p>
            </div>
          </article>
        </li>
      {/each}
    </ul>
    <h2 class="headline">Past work <br />experience</h2>
  </div>
</section>

<style>
  .work-experience {
    font-family: inherit;
    width: 100%;
  }

  .work-experience-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: clamp(2rem, 4vw, 3rem);
  }

  .work-experience-list {
    flex: 1;
    max-width: 60%;
  }

  .headline {
    text-align: right;
    flex-shrink: 0;
    max-width: 35%;
  }

  .work-item {
    border-bottom: 1px solid #f0eded;
    padding-bottom: clamp(0.75rem, 2vw, 0.75rem);
    margin-bottom: clamp(1rem, 2vw, 1rem);
  }

  .work-item:not(:first-of-type) {
    padding-top: clamp(1rem, 2vw, 1rem);
  }

  .work-item:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }

  .work-item p {
    margin-bottom: 0;
  }

  .company-and-date {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .company-name {
    flex: 1;
    min-width: 0;
  }

  .date-range {
    flex-shrink: 0;
    white-space: nowrap;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .work-experience-content {
      flex-direction: column;
      gap: 2rem;
    }

    .work-experience-list {
      max-width: 100%;
      order: 2;
    }

    .headline {
      text-align: left;
      max-width: 100%;
      order: 1;
    }

    .company-and-date {
      flex-direction: column;
      gap: 0.5rem;
      align-items: flex-start;
    }

    .date-range {
      white-space: normal;
    }
  }

  @media (max-width: 480px) {
    .work-experience-content {
      gap: 1.5rem;
    }

    .work-item {
      padding-bottom: 0.5rem;
      margin-bottom: 0.75rem;
    }

    .work-item:not(:first-of-type) {
      padding-top: 0.75rem;
    }

    .company-and-date {
      gap: 0.25rem;
    }
  }
</style>
