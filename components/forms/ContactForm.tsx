import { FormShell, TextArea, TextInput } from "@/components/forms/FormShell";

export function ContactForm() {
  return (
    <FormShell
      title="Send an enquiry"
      formName="contact"
      action="https://api.web3forms.com/submit"
      method="POST"
      hiddenFields={{
        access_key: "2412214d-cd7d-43e7-829c-0a5991ff7cfc",
        subject: "New Contact Enquiry - Jobhut Consultancy"
      }}
      submitLabel="Send Message"
      successMessage="Thanks. Your enquiry has been submitted."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <TextInput label="Full name" name="name" placeholder="Your name" />
        <TextInput label="Email" name="email" type="email" placeholder="you@example.com" />
      </div>
      <TextInput label="Phone" name="phone" type="tel" placeholder="+91 99537 92970" />
      <TextArea label="Message" name="message" placeholder="Tell us how Jobhut Consultancy can help." />
    </FormShell>
  );
}
