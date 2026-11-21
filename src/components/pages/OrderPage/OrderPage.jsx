import { Link, useParams } from "react-router";

export default function OrderPage() {
  const { username } = useParams();

  return (
    <>
      <h1>Bonjour {username}</h1>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </>
  );
}
