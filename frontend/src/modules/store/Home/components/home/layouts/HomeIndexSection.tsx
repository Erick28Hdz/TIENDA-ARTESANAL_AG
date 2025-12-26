import CategoryDropdown from "@/modules/store/Home/components/home/categories/CategoryDropdown";
import IntroText from "@/modules/store/Home/components/home/messages/IntroText";
import SearchBar from "@/modules/store/Home/components/home/search/SearchBar";

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
