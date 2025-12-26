import clsx from "clsx";

type SectionVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "transparent";

interface SectionContainerProps {
  children: React.ReactNode;
  variant?: SectionVariant;
  className?: string;
}

const variantStyles: Record<SectionVariant, React.CSSProperties> = {
  primary: {
    backgroundColor: "var(--color-primario)",
    borderColor: "var(--color-terciario)",
  },
  secondary: {
    backgroundColor: "var(--color-secundario)",
    borderColor: "var(--color-terciario)",
  },
  tertiary: {
    backgroundColor: "var(--color-terciario)",
    borderColor: "var(--color-secundario)",
  },
  transparent: {
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
};

const SectionContainer = ({
  children,
  variant = "primary",
  className,
}: SectionContainerProps) => {
  return (
    <section
      className={clsx(
        `
          w-[95%]
          my-5 mx-auto
          p-4
          flex flex-col
          gap-4
          border-2 rounded-[10px]
          relative
        `,
        className
      )}
      style={variantStyles[variant]}
    >
      {children}
    </section>
  );
};

export default SectionContainer;
