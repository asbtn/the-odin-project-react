import { useState } from "react";
import Checkbox from "./Checkbox";
import Section from "./Section";
import Input from "./Input";
import TextArea from "./TextArea";

export default function Form() {
  const [isEditingValue, setIsEditingValue] = useState(true)

  function toggleEditMode() {
    setIsEditingValue(!isEditingValue);
  }

  return (
    <div className="form">
      <Section title="General Information">
        <Input name="fullName" label="Full name" type="text" isEditing={isEditingValue} />
        <Input name="email" label="Email" type="email" isEditing={isEditingValue} />
        <Input name="phoneNumber" label="Phone number" type="tel" isEditing={isEditingValue} />
        <Input name="location" label="Location" type="text" isEditing={isEditingValue} />
        <Input name="linkedinUrl" label="Linkedin URL" type="url" isEditing={isEditingValue} />
        <Input name="websitePortfolioUrl" label="Website/portfolio URL" type="url" isEditing={isEditingValue} />
        <TextArea name="professionalSummary" label="Professional summary" isEditing={isEditingValue} />
      </Section>

      <Section title="Education">
        <Input name="schoolName" label="School name" type="text" isEditing={isEditingValue} />
        <Input name="degree" label="Degree" type="text" isEditing={isEditingValue} />
        <Input name="fieldOfStudy" label="Field of study" type="text" isEditing={isEditingValue} />
        <Input name="startDate" label="Start date" type="date" isEditing={isEditingValue} />
        <Input name="endDate" label="End date" type="date" isEditing={isEditingValue} />
        <Checkbox name="currentlyStudying" label="Currently studying" isEditing={isEditingValue} />
        <TextArea name="notes" label="Notes" isEditing={isEditingValue} />
      </Section>

      <Section title="Work Experience">
        <Input name="companyName" label="Company name" type="text" isEditing={isEditingValue} />
        <Input name="jobTitle" label="Job title" type="text" isEditing={isEditingValue} />
        <Input name="location" label="Location" type="text" isEditing={isEditingValue} />
        <Input name="startDate" label="Start date" type="date" isEditing={isEditingValue} />
        <Input name="endDate" label="End date" type="date" isEditing={isEditingValue} />
        <Checkbox name="currentlyWorking" label="Currently working" isEditing={isEditingValue} />
        <TextArea name="mainResponsibilities" label="Main responsibilities" isEditing={isEditingValue} />
        <TextArea name="keyAchievements" label="Key Achievements" isEditing={isEditingValue} />
      </Section>

      {isEditingValue ? (
        <button className="save-button" onClick={toggleEditMode}>Save</button>
      ) : (
        <button className="edit-button" onClick={toggleEditMode}>Edit</button>
      )}
    </div>
  )
}
