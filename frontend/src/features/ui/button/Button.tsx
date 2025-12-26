import React from "react";

type ButtonVariant =
    | "primary"
    | "secondary"
    | "outline"
    | "text"
    | "success"
    | "danger"
    | "warning"
    | "icon"
    | "dropdownItem"
    | "cart"
    | "category"
    | "categoryModern"
    | "link"
    | "explorer";


type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
    children?: React.ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    icon?: string;
    disabled?: boolean;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    className?: string;
};

const Button = ({
    children,
    variant = "primary",
    size = "sm",
    icon,
    disabled = false,
    onClick,
    type = "button",
    className = "",
}: ButtonProps) => {

    // 🟦 Base de estilos comunes
    const baseStyles = `
        inline-flex items-center justify-center gap-2 
        font-textos font-medium
        group
    `;

    // 🟦 Tamaños
    const sizeStyles = {
        sm: "text-sm px-2 py-1",
        md: "text-base px-3 py-2",
        lg: "text-lg px-4 py-3",
    }[size];

    // 🟦 Variantes
    const variantStyles = {
        primary: "bg-[--color-primario] text-white hover:bg-[--color-secundario]",
        secondary:
            "bg-[--color-secundario] text-white hover:bg-[--color-primario]",
        outline:
            "border border-[--color-primario] text-[--color-primario] bg-transparent hover:bg-[--color-primario] hover:text-white",
        text: "bg-transparent text-[--color-primario] hover:underline",
        success:
            "bg-green-500 text-white hover:bg-green-600 focus:ring-green-300",
        danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-300",
        warning:
            "bg-yellow-400 text-black hover:bg-yellow-500 focus:ring-yellow-200",
        icon: `
            rounded-full p-2 bg-[--color-primario] text-white
            hover:bg-[--color-secundario]
            w-10 h-10 flex items-center justify-center
        `,
        dropdownItem: `
            flex items-center justify-start w-full
            px-3 py-1 text-left
            rounded-md transition-all duration-200 ease-in-out
            hover:bg-[var(--color-cuaternario)]
            hover:scale-110
            hover:shadow-md
            cursor-pointer
        `,
        category: `
            flex items-center justify-center
            w-[3.125em] h-[3.125em]
            bg-(--color-cuaternario)
            rounded-full! cursor-pointer
            transition-transform duration-150 ease-in-out
            hover:scale-110 active:scale-95
            shadow-[0_2px_8px_rgba(0,0,0,0.25)]
        `,
        cart: `
            group flex p-[0.3em] border-2 border-(--color-cuaternario)
            rounded-full! cursor-pointer
            transition-all duration-300 ease-in-out
            hover:border-(--color-secundario) hover:bg-(--color-cuaternario2)
            w-10 h-10 items-center justify-center
        `,
        link: `
            relative bg-transparent font-normal text-[15px]
            transition-colors duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)]
            after:content-[''] after:absolute after:left-0 after:bottom-[-6px]
            after:h-[1px] after:w-0
            after:transition-all after:duration-500
            hover:after:w-full
        `,
        categoryModern: `
            relative
            bg-transparent
            font-[var(--letra-textos)]
            text-[var(--color-cuaternario2)]
            text-[20px]
            font-bold
            py-[5px] px-[20px] pl-[10px]
            cursor-pointer
            drop-shadow-[0_0_5px_var(--color-cuaternario)]
            transition-all duration-100
            z-[1]

            before:content-['']
            before:absolute
            before:w-[6px] before:h-[6px]
            before:bg-[var(--color-terciario)]
            before:left-[-10px] before:top-[10px]
            before:rounded-[5px]
            before:-z-[1]
            before:rotate-[225deg]
            before:transition-all before:duration-300

            hover:text-[var(--color-cuaternario2)]
            hover:before:rotate-0
            hover:before:w-full
            hover:before:h-[30px]
            hover:before:top-[1px]
            hover:before:rounded-[3px]
            hover:before:bg-[var(--color-terciario)]
            active:before:bg-[var(--color-cuaternario)]
        `,
        explorer: `
            px-3 h-10
            flex items-center justify-start gap-2.5
            bg-[var(--color-cuaternario)] text-[var(--color-cuaternario2)] font-semibold
            rounded-[15px]! border-none cursor-pointer
            shadow-md pl-2
            transition-all duration-500
            active:scale-95
            hover:bg-[var(--color-secundario)]
            hover:text-[var(--color-cuaternario2)]
            group
        `,
    }[variant];

    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`
        ${baseStyles}
        ${sizeStyles}
        ${variantStyles}
        ${className}

    `}
        >
            {/* ICONO NORMAL */}
            {icon && (
                <img
                    src={icon}
                    alt=""
                    className="w-[30px] h-auto transition-transform duration-500"
                />
            )}

            {/* TEXTO */}
            {children && <span>{children}</span>}

            {/* ICONO ESPECIAL - VARIANT LINK */}
            {variant === "link" && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="
                        w-[0.9em] h-[0.8em] ml-2
                        fill-current -rotate-45
                        transition-transform duration-500 ease-out
                        group-hover:rotate-0
                    "
                >
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
            )}

            {/* ICONO ANIMADO - VARIANT EXPLORER */}
            {variant === "explorer" && (
                <svg
                    className="
            w-[25px] h-[25px]
            transition-all duration-1500
            group-hover:rotate-250
        "
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill="rgb(19,19,19)"
                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
                    />
                </svg>
            )}
        </button>
    );
};

export default Button;

