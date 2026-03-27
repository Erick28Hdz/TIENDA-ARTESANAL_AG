import { useNavigate } from "react-router-dom";
import CategoryDropdown from "@/modules/store/Home/layouts/CategoryDropdown";
import IntroText from "@/features/layouts/messages/IntroText";
import SearchBar from "@/features/ui/search/SearchBar";

const HomeIndexSection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-[90%] m-auto flex items-center pb-5 h-auto gap-20">
      <CategoryDropdown />
      <IntroText />
      <SearchBar />

      {/* 🔐 Acceso al Dashboard */}
      <button
        onClick={() => navigate("/dashboard")}
        className="px-4 py-2 bg-(--color-primario) text-white rounded-md hover:opacity-90 transition"
      >
        Dashboard
      </button>
    </section>
  );
};

export default HomeIndexSection;
