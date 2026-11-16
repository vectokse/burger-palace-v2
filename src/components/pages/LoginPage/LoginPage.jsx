import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Bonjour ${username}`);
    setUsername("");
  };

  return (
    <>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <h3>Connectez-vous</h3>
        <input
          type="text"
          name="username"
          placeholder="Entrez votre prénom..."
          required
          value={username}
          onChange={handleUsernameChange}
          autoComplete="username"
        />
        <button>Accédez à votre espace</button>
      </form>
    </>
  );
}
