import Banner from "@/shared/ui/Bannner";
import Hero from "@/widgets/sections/Hero";
import Hits from "@/widgets/sections/Hits";
import Popular from "@/widgets/sections/Popular";
import Stories from "@/widgets/sections/Stories";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Stories />
      <Hits />
      <Banner />
      <Popular />
    </>
  );
};

export default HomePage;
