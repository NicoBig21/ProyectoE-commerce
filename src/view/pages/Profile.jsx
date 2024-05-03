import { useContext } from "react";
import { AuthContext } from "../../auth/context";

export default function Profile() {
  // Acceder al contexto de autenticación
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h2>{user?.name }</h2>
      <p>Profile...</p>
    </div>
  );
}
