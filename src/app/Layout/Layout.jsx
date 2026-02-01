import Header from "./components/Header";
import Breadcrumbs from "@/widgets/Breadcrumbs";
import { useEffect } from "react";
import Footer from "./components/Footer";
import { useLocationController } from "@/shared/lib/hooks/useLocationController";

const Layout = (props) => {
  const { children } = props;

  const { pathname, isOnHomePage } = useLocationController();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <main>
        {!isOnHomePage && <Breadcrumbs />}
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
