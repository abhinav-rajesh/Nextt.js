// pages/index.tsx
import Link from "next/link";
import Layout from "../components/Layout";

const Home: React.FC = () => {
  return (
    <Layout>
      <h1>Welcome to the Micro Donation Platform</h1>
      <Link href="/donate">
        <a>Donate Anonymously</a>
      </Link>
      <br />
      <Link href="/register-cause">
        <a>Register a Cause</a>
      </Link>
    </Layout>
  );
};

export default Home;
