import styled from "styled-components";
import Button from "../button/Button";

interface AuthFormProps {
  title: string;
  email: string;
  password: string;
  confirmPassword?: string;
  error?: string;
  submitLabel: string;

  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onConfirmPasswordChange?: (value: string) => void;
  onSubmit: () => void;
  onGoogleLogin?: () => void;

  mode: "login" | "register";
  onSwitchMode: (mode: "login" | "register") => void;
}

const AuthCard = ({
  title,
  email,
  password,
  confirmPassword,
  submitLabel,
  error,
  onEmailChange,
  onPasswordChange,
  onConfirmPasswordChange,
  onSubmit,
  onGoogleLogin,
  mode,
  onSwitchMode,
}: AuthFormProps) => {
  return (
    <StyledWrapper>
      <div className="container">
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <div className="form_front">
            <div className="form_details">{title}</div>

            {error && <p className="error">{error}</p>}

            <input
              type="email"
              className="input"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
            />

            <input
              type="password"
              className="input"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => onPasswordChange(e.target.value)}
            />

            {mode === "register" && onConfirmPasswordChange && (
              <input
                type="password"
                className="input"
                placeholder="Confirmar contraseña"
                value={confirmPassword}
                onChange={(e) => onConfirmPasswordChange(e.target.value)}
              />
            )}

            <button className="btn" type="submit">
              {submitLabel}
            </button>

            {onGoogleLogin && (
              <button
                type="button"
                className="btn btn-google"
                onClick={onGoogleLogin}
              >
                <img src="/images/Iconos/google.png" alt="Google" />
                <span>Google</span>
              </button>
            )}

            {/* EXTRA LINKS */}
            {mode === "login" && (
              <Button
                type="button"
                variant="primary"
                size="sm"
                onClick={() => console.log("Forgot password")}
              >
                ¿Olvidaste tu contraseña?
              </Button>
            )}

            <span className="switch">
              {mode === "login" ? (
                <>
                  ¿No tienes cuenta?{" "}
                  <button
                    type="button"
                    onClick={() => onSwitchMode("register")}
                  >
                    Regístrate
                  </button>
                </>
              ) : (
                <>
                  ¿Ya tienes cuenta?{" "}
                  <button
                    type="button"
                    onClick={() => onSwitchMode("login")}
                  >
                    Inicia sesión
                  </button>
                </>
              )}
            </span>
          </div>
        </form>
      </div>
    </StyledWrapper>
  );
};


const StyledWrapper = styled.div`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form {
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    transition: all 1s ease;
  }

  .form .form_front {
  background-color: var(--color-cuaternario);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    backface-visibility: hidden;
    padding: 65px 45px;
    border-radius: 15px;
    box-shadow: inset 2px 2px 10px rgba(0,0,0,1),
    inset -1px -1px 5px rgba(255, 255, 255, 0.6);
  }

  .form .form_back {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    position: absolute;
    backface-visibility: hidden;
    transform: rotateY(-180deg);
    padding: 65px 45px;
    border-radius: 15px;
    box-shadow: inset 2px 2px 10px rgba(0,0,0,1),
    inset -1px -1px 5px rgba(255, 255, 255, 0.6);
  }

  .form_details {
    font-size: 25px;
    font-weight: 600;
    padding-bottom: 10px;
    color: white;
  }

  .input {
    width: 245px;
    min-height: 45px;
    color: #fff;
    outline: none;
    transition: 0.35s;
    padding: 0px 7px;
    background-color: #212121;
    border-radius: 6px;
    border: 2px solid #212121;
    box-shadow: 6px 6px 10px rgba(0,0,0,1),
    1px 1px 10px rgba(255, 255, 255, 0.6);
  }

  .input::placeholder {
    color: #999;
  }

  .input:focus.input::placeholder {
    transition: 0.3s;
    opacity: 0;
  }

  .input:focus {
    transform: scale(1.05);
    box-shadow: 6px 6px 10px rgba(0,0,0,1),
    1px 1px 10px rgba(255, 255, 255, 0.6),
    inset 2px 2px 10px rgba(0,0,0,1),
    inset -1px -1px 5px rgba(255, 255, 255, 0.6);
  }

  .btn {
    padding: 10px 35px;
    cursor: pointer;
    background-color: #212121;
    border-radius: 6px;
    border: 2px solid #212121;
    box-shadow: 6px 6px 10px rgba(0,0,0,1),
    1px 1px 10px rgba(255, 255, 255, 0.6);
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    transition: 0.35s;
  }

  .btn:hover {
    transform: scale(1.05);
    box-shadow: 6px 6px 10px rgba(0,0,0,1),
    1px 1px 10px rgba(255, 255, 255, 0.6),
    inset 2px 2px 10px rgba(0,0,0,1),
    inset -1px -1px 5px rgba(255, 255, 255, 0.6);
  }

  .btn:focus {
    transform: scale(1.05);
    box-shadow: 6px 6px 10px rgba(0,0,0,1),
    1px 1px 10px rgba(255, 255, 255, 0.6),
    inset 2px 2px 10px rgba(0,0,0,1),
    inset -1px -1px 5px rgba(255, 255, 255, 0.6);
  }

  .form .switch {
  margin-top: 10px;
  font-size: 13px;
  color: var(--color-cuaternario2);

  display: flex;
  gap: 6px;
  align-items: center;
}

.form .switch .signup_tog {
  color: var(--color-primario);
  font-weight: 700;
  cursor: pointer;
  position: relative;

  transition: color 0.2s ease;
}

.form .switch .signup_tog::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;

  width: 100%;
  height: 2px;
  background-color: var(--color-primario);

  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.25s ease;
}

.form .switch .signup_tog:hover {
  color: var(--color-secundario);
}

.form .switch .signup_tog:hover::after {
  transform: scaleX(1);
}
    
  .btn-google {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    padding: 6px 18px;
    font-size: 13px;
    font-weight: 600;

    width: auto;
    min-height: 36px;

    background-color: #1f1f1f;
  }

  .btn-google img {
    width: 16px;
    height: 16px;
  }
`;

export default AuthCard;
