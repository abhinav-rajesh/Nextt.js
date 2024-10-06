// components/CauseForm.tsx
import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

// Define a type for the cause state
interface Cause {
  name: string;
  description: string;
  goal: string;
}

const CauseForm: React.FC = () => {
  const [cause, setCause] = useState<Cause>({ name: "", description: "", goal: "" });

  // Update handleSubmit to specify the type of the event
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.post("/api/register-cause", cause);
    alert("Cause Registered Successfully!");
    setCause({ name: "", description: "", goal: "" });
  };

  // Update onChange to specify the type of the event
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCause((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register a Cause</h2>
      <input
        type="text"
        name="name" // Add name attribute for easier state updates
        placeholder="Cause Name"
        value={cause.name}
        onChange={handleChange}
        required
      />
      <textarea
        name="description" // Add name attribute for easier state updates
        placeholder="Description"
        value={cause.description}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="goal" // Add name attribute for easier state updates
        placeholder="Donation Goal (USD)"
        value={cause.goal}
        onChange={handleChange}
        required
      />
      <button type="submit">Register Cause</button>
    </form>
  );
};

export default CauseForm;
