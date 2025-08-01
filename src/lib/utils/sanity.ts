import { createClient, SanityClient, type ClientConfig } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const config: ClientConfig = {
  projectId: "hfxcqeu8",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-07-15",
};

const sanityClient = createClient(config);
export default sanityClient;

export function processProjectEntries(rawProject: SanityProject) {
  const builder = imageUrlBuilder(sanityClient);
  const projectImageUrl = builder.image(rawProject.image).url();

  const processedProject: ProcessedProject = {
    name: rawProject.name,
    company: rawProject.company,
    stack: rawProject.stack ?? [],
    dateAccomplished: rawProject.dateAccomplished ?? "N/A",
    slug: rawProject.slug,
    projectImageUrl,
    content: rawProject.content
      ? (rawProject.content.map(processProjectContent) as (
          | ProcessedTextContent
          | ProcessedImageContent
        )[])
      : [],
  };

  return processedProject;
}

function processProjectContent(content: RawTextContent | RawImageContent) {
  if (content._type === "block") {
    const processedTextContent: ProcessedTextContent = {
      type: "text",
      style: content.style,
      textToRender:
        content.children?.map((elem) => elem.text).join("\n") ?? "N/A",
    };
    return processedTextContent;
  } else {
    const builder = imageUrlBuilder(sanityClient);
    const projectImageUrl = builder.image(content).url();
    const processedImage: ProcessedImageContent = {
      type: "image",
      url: projectImageUrl,
    };

    return {
      type: "image",
      url: projectImageUrl,
    };
  }
}
