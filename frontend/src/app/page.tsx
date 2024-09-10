"use client"; // Dit is een client component

import { useSession, signOut } from "next-auth/react";

const Home = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session) {
    return <p>Je bent niet ingelogd</p>;
    
  }

  return (
    <div>
      <h1>Welkom, {session.user?.email}!</h1>
      <button onClick={() => signOut()}>Uitloggen</button>
    </div>
  );
};

export default Home;
