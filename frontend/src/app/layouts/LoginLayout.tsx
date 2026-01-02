import Footer from "@/features/layouts/footer/Footer";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <>
        <main>{children}</main>
        <Footer />
      </>
    );
  };
  export default LoginLayout;