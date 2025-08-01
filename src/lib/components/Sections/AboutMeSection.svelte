<script lang="ts">
  import { SectionHeadline, Button, ExperienceTable } from "$components";
  import image from "$assets/about-me.jpg";
  import { goto } from "$app/navigation";

  interface AboutMeProps {
    workExperience: SanityWorkExperience[];
  }
  let { workExperience } = $props();
  function onClick() {
    goto("/#contact-form");
  }
</script>

<section class="about-me mt-l">
  <SectionHeadline sectionName={"about-me"}>About Me</SectionHeadline>
  <div class="mt-m content-container default-margin">
    <img class="image" src={image} alt="colorful blobs" />
    <div class="text">
      <p>
        Hey, I'm Vedant, the driving force behind my freelancing agency
        specializing in web dev and AI
      </p>
      <p>
        I'm a self-driven web developer with a passion for crafting clean,
        functional, and user-centered digital experiences. My journey began with
        curiosity—taking things apart just to understand how they work—and it
        naturally led me to the world of coding. From building simple static
        sites to architecting responsive apps with modern frameworks like React
        and Next.js, I’m constantly evolving and pushing my limits to stay ahead
        in this ever-changing tech landscape.
      </p>
      <p>
        Beyond just writing code, I care deeply about the why behind design and
        functionality. I believe in building not just for the browser, but for
        the person behind the screen. Whether it's optimizing performance,
        refining UI/UX, or learning new tools to make better decisions, I thrive
        in turning ideas into experiences that feel intuitive and seamless. When
        I'm not coding, you’ll find me exploring design tools, geeking out over
        new tech, or refining my skills to deliver better with each project.
      </p>
      <Button className="mt-m" {onClick}>Tell me about your projects</Button>
    </div>
  </div>
  <ExperienceTable {workExperience} />
</section>

<style>
  section {
    padding-top: 60px;
  }
  .content-container {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
  }

  .image {
    width: 40%;
    height: 1;
    border-radius: 20px;
    object-fit: cover;
  }

  .text {
    width: 55%;
    text-align: left;
  }
</style>
