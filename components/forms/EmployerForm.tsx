import { FormShell, SelectInput, TextArea, TextInput } from "@/components/forms/FormShell";

export function EmployerForm() {
  return (
    <FormShell title="Employer hiring enquiry" formName="employer-enquiry" submitLabel="Request Hiring Support" successMessage="Thanks. Our hiring team will review your requirement.">
      <div className="grid gap-5 sm:grid-cols-2">
        <TextInput label="Your name" name="name" />
        <TextInput label="Work email" name="email" type="email" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <TextInput label="Company name" name="company" />
        <TextInput label="Phone" name="phone" type="tel" />
      </div>
      <SelectInput label="Hiring need" name="hiringNeed" options={["1-3 roles", "4-10 roles", "Volume hiring", "Recruitment consulting"]} />
      <TextArea label="Role details" name="message" placeholder="Share role titles, location, experience, and timeline." />
    </FormShell>
  );
}
