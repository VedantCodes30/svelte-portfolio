<script lang="ts">
  import { Button, SectionHeadline } from "$components";

  let contactName: String = $state("");
  let contactMail = $state("");
  let informationAboutProject = $state("");
  let isEmailSent = $state(false);
  let isFormInvalid = $state(false);
  let showErrorMessage = $state(false);
  let isLoading = $state(false);

  $inspect(isEmailSent);

  async function onsubmit(event: Event) {
    event.preventDefault();

    if (contactMail && contactName && informationAboutProject) {
      isLoading = true;
      // send data to project

      const response = await fetch("/api/send-mail", {
        method: "POST",
        body: JSON.stringify({
          contactName,
          contactMail,
          informationAboutProject,
        }),
        headers: { "content-type": "application/json" },
      });

      isLoading = false;

      if (response.ok) {
        isEmailSent = true;
      } else {
        showErrorMessage = true;
      }
    } else {
      isFormInvalid = true;
    }
  }

  $effect(() => {
    if (contactName || contactMail || informationAboutProject) {
      isFormInvalid = false;
    }
  });
</script>

<section class="mt-l" id="contact-form">
  <SectionHeadline sectionName="Contact Form">Let's Talk</SectionHeadline>
  <div class="form-container default-margin mt-m">
    {#if isEmailSent}
      <div class="spinner-container">
        <h3>Thanks for getting in contact with me!</h3>
        <Button><a href="/">Go UP ^</a></Button>
      </div>
    {:else if showErrorMessage}
      <h3>
        Seems to have some problem. please send an email directly to <a
          href="mailto:vedantcodes30@gmail.com"
          class="link">here!</a
        >
      </h3>
    {:else if isLoading}
      <div class="spinner-container">
        <div class="spinner"></div>
        <h3>Sending off the form</h3>
      </div>
    {:else}
      <form>
        <input
          required
          class={`text-input mb-m `}
          class:input-error={isFormInvalid &&
            !Boolean(contactName.length) &&
            "input-error"}
          placeholder="Your Name"
          bind:value={contactName}
        />
        <input
          required
          class="text-input mb-m"
          class:input-error={isFormInvalid &&
            !Boolean(contactMail.length) &&
            "input-error"}
          placeholder="Your Email"
          bind:value={contactMail}
        />
        <textarea
          required
          class:input-error={isFormInvalid &&
            !Boolean(informationAboutProject.length) &&
            "input-error"}
          bind:value={informationAboutProject}
          placeholder="tell me what's up"
        ></textarea>
        <Button onClick={onsubmit}>Submit</Button>
      </form>
    {/if}

    <div class="form-text">
      <h3 class="bold mb-s">Talk to me about your project</h3>
      <p>
        Thanks for stopping by! I'm currently working on improving this page to
        give you a better way to reach out. Whether it's about a project,
        collaboration, or just to say hi — this space will soon have everything
        you need. Stay tuned!
      </p>
    </div>
  </div>
</section>

<style>
  section {
    padding-bottom: clamp(3rem, 8vw, 8.75rem);
  }

  .form-container {
    display: flex;
    justify-content: space-between;
    gap: clamp(2rem, 4vw, 3rem);
  }

  .form-text {
    width: 39%;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 45%;
    gap: 1rem;
  }

  form * {
    font-size: clamp(1rem, 2.5vw, 1.25rem);
    font-family: inherit;
    font-weight: 500;
  }

  textarea,
  input {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.035);
    border-radius: clamp(6px, 1.5vw, 8px);
    padding: clamp(0.75rem, 2vw, 0.75rem);
    outline: none;
    border: none;
    transition: background-color 0.3s ease;
  }

  textarea:focus,
  input:focus {
    background-color: rgba(0, 0, 0, 0.05);
  }

  input {
    height: clamp(40px, 6vw, 48px);
  }

  textarea {
    height: clamp(100px, 15vw, 120px);
    resize: vertical;
  }

  textarea::placeholder,
  input::placeholder {
    font-size: clamp(1rem, 2.5vw, 1.25rem);
    font-weight: 400;
  }

  .spinner-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    text-align: center;
  }

  .spinner {
    border: 4px solid white;
    border-left-color: black;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    display: inline-block;
    margin-right: 8px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  .input-error {
    background-color: rgba(223, 87, 87, 0.667);
  }

  .input-error::placeholder {
    color: white;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .form-container {
      flex-direction: column;
      gap: 2rem;
    }

    .form-text {
      width: 100%;
      order: 1;
    }

    form {
      width: 100%;
      order: 2;
    }

    .spinner-container {
      flex-direction: column;
      gap: 1rem;
    }
  }

  @media (max-width: 480px) {
    section {
      padding-bottom: 2rem;
    }

    .form-container {
      gap: 1.5rem;
    }

    form {
      gap: 0.75rem;
    }

    textarea,
    input {
      padding: 0.5rem;
    }
  }
</style>
