import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How personal data is handled on the Dolphin Group website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal / Privacy"
      title="Privacy Policy"
      intro="This document outlines the principles for handling data on the Dolphin Group website. The current contact form is a demonstration and does not send data without a configured API."
      sections={[
        {
          title: "Data that may be processed",
          paragraphs: [
            "Once a live contact channel is configured, the form may transmit a name, email address or phone number, company name, selected service, and project description — only after an explicit user action.",
            "The website should not request special categories of personal data, payment details, or passwords.",
          ],
        },
        {
          title: "Purpose of processing",
          paragraphs: [
            "Data is used only to respond to an inquiry, clarify the challenge, and discuss a potential project. It should not be used for unsolicited marketing or shared with third parties without a lawful basis.",
          ],
        },
        {
          title: "Storage and protection",
          paragraphs: [
            "Retention periods, storage location, and the responsible data operator must be confirmed when a live API or form service is connected. Until then, this website does not claim to store submitted inquiries.",
          ],
        },
        {
          title: "Your rights",
          paragraphs: [
            "You may request information about processing, correction, or deletion of your data through the company’s official contact channel once it is published on the website.",
          ],
        },
      ]}
    />
  );
}
