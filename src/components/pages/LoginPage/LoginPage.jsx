import { useState } from "react";
import { useNavigate } from "react-router";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/order/${username}`);
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
