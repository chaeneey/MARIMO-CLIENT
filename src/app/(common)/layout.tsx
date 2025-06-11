import { Header } from "@/components/common";
import Footer from "@/components/common/Footer/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div style={{ minHeight: "calc(100dvh - 11rem)" }}>{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
