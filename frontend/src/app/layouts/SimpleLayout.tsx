import NavbarComponent from "@/features/section/Navbar";
import Footer from "@/features/layouts/footer/Footer";

const SimpleLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <>
        <NavbarComponent />
        <main>{children}</main>
        <Footer />
      </>
    );
  };
  export default SimpleLayout;