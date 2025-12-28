interface AboutLayoutProps {
  children: React.ReactNode;
}

const AboutLayout = ({ children }: AboutLayoutProps) => {
  return (
    <div
      className="
        tienda-virtual
        bg-(--color-cuaternario2)
        text-center
      "
    >
      {children}
    </div>
  );
};

export default AboutLayout;
