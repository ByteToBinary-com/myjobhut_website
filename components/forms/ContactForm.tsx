import { FormShell, TextArea, TextInput } from "@/components/forms/FormShell";

export function ContactForm() {
  return (
    <FormShell title="Send an enquiry" formName="contact" submitLabel="Send Message" successMessage="Thanks. Your enquiry has been captured.">
      <div className="grid gap-5 sm:grid-cols-2">
        <TextInput label="Full name" name="name" placeholder="Your name" />
        <TextInput label="Email" name="email" type="email" placeholder="you@example.com" />
      </div>
      <TextInput label="Phone" name="phone" type="tel" placeholder="+91 99537 92970" />
      <TextArea label="Message" name="message" placeholder="Tell us how My Job Hut can help." />
    </FormShell>
  );
}
