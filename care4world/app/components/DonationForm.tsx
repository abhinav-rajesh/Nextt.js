// components/DonationForm.tsx
import { useState, FormEvent } from "react";
import axios from "axios";

const DonationForm: React.FC = () => {
  const [amount, setAmount] = useState<string>("");

  // Specify the type of the event parameter
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const session = await axios.post("/api/create-checkout-session", { amount });
    window.location.href = session.data.url; // Redirect to Stripe checkout page
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Donate Anonymously</h2>
      <input
        type="number"
        placeholder="Enter amount (INR)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button type="submit">Donate</button>
    </form>
  );
};

export default DonationForm;
