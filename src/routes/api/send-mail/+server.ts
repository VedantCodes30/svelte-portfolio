import { SENDGRID_API_KEY } from "$env/static/private";

import sgMail from "@sendgrid/mail";
import { json } from "@sveltejs/kit";

sgMail.setApiKey(SENDGRID_API_KEY);

export async function POST({ request }) {
  const { contactMail, contactName, informationAboutProject } =
    await request.json();

  if (!SENDGRID_API_KEY) {
    console.error("SENDGRID_API_KEY is missing");
    return json({ error: "Missing API key" }, { status: 500 });
  }

  if (!contactMail || !contactName || !informationAboutProject) {
    json({ message: "could not send email, missing data" }, { status: 400 });
  }

  const message = {
    to: "vedantcodes30@gmail.com",
    from: "vedantcodes30@gmail.com",
    subject: "Testing the form ",
    html: `Somebody used the contact form on your site.<br/>
        Name: ${contactName},
        Email: ${contactMail},
        information About the Project: ${informationAboutProject}`,
  };

  console.log("Incoming contact data:", {
    contactMail,
    contactName,
    informationAboutProject,
  });

  try {
    await sgMail.send(message);
    return json({ emailSentSuccessfully: true });
  } catch (err) {
    console.error("SendGrid Error:", err);

    return json({ err }, { status: 500 });
  }
}
