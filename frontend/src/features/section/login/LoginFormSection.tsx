import AuthCard from "@/features/ui/card/CardAuth";
import { useLogin } from "@/modules/user/login/hook/useLogin";

interface Props {
  onSwitchMode: () => void;
}

const LoginFormSection = ({ onSwitchMode }: Props) => {
  const {
    email,
    contrasena,
    error,
    setEmail,
    setPassword,
    login,
    loginWithGoogle,
  } = useLogin();

  return (
    <AuthCard
      title="Iniciar sesión"
      submitLabel="Iniciar sesión"
      email={email}
      password={contrasena}
      error={error}
      onEmailChange={setEmail}
      onPasswordChange={setPassword}
      onSubmit={login}
      onGoogleLogin={loginWithGoogle}
      mode="login"
      onSwitchMode={onSwitchMode}
    />
  );
};

export default LoginFormSection;
