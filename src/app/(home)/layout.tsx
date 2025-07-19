import Footer from "@/components/common/Footer/Footer";
import { HomeHeader } from "@/components/home";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <HomeHeader />
      <div style={{ minHeight: "calc(100dvh - 11rem)" }}>{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
