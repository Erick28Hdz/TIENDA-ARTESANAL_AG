import { useState, useEffect } from "react";
// import axios from "axios"; ❌ comentado porque no usamos backend ahora
import { useNavigate } from "react-router-dom";
import { auth } from "@/app/config/firebaseConfig";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";

export const useLogin = () => {
  const [email, setEmail] = useState("");
  const [contrasena, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // 🔁 Login con Google (redirect)
  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) {
          localStorage.setItem("usuario", JSON.stringify(result.user));
          navigate("/");
        }
      })
      .catch(() => {
        setError("Hubo un problema con el inicio de sesión con Google.");
      });
  }, [navigate]);

  // 🔐 Login SIMULADO (sin backend)
  const login = async () => {
    setError("");

    if (email === "test@test.com" && contrasena === "123456") {
      localStorage.setItem("token", "token-falso");
      localStorage.setItem(
        "usuario",
        JSON.stringify({
          email,
          nombre: "Usuario Test",
        })
      );

      navigate("/");
    } else {
      setError("Correo o contraseña incorrectos.");
    }
  };

  // 🔑 Login con Google
  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithRedirect(auth, provider);
  };

  return {
    email,
    contrasena,
    error,
    setEmail,
    setPassword,
    login,
    loginWithGoogle,
  };
};
