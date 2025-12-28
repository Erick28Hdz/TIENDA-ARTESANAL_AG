import CategoryDropdown from "@/features/layouts/home/CategoryDropdown";
import IntroText from "@/features/layouts/home/messages/IntroText";
import SearchBar from "@/features/ui/search/SearchBar";

const HomeIndexSection = () => {
  return (
    <section className="w-[90%] m-auto flex items-center pb-5 h-auto gap-20">
      <CategoryDropdown />
      <IntroText />
      <SearchBar />
    </section>
  );
};

export default HomeIndexSection;
