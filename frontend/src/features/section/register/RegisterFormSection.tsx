import AuthCard from "@/features/ui/card/CardAuth";
import { useRegister } from "@/modules/user/register/hook/useRegister";

interface Props {
  onSwitchMode: () => void;
}

const RegisterFormSection = ({ onSwitchMode }: Props) => {
  const {
    email,
    password,
    confirmPassword,
    error,
    setEmail,
    setPassword,
    setConfirmPassword,
    register,
    registerWithGoogle,
  } = useRegister();

  return (
    <AuthCard
      title="Crear cuenta"
      submitLabel="Registrarse"
      email={email}
      password={password}
      confirmPassword={confirmPassword}
      error={error}
      onEmailChange={setEmail}
      onPasswordChange={setPassword}
      onConfirmPasswordChange={setConfirmPassword}
      onSubmit={register}
      onGoogleLogin={registerWithGoogle}
      mode="register"
      onSwitchMode={onSwitchMode}
    />
  );
};

export default RegisterFormSection;
