import { Header } from "@/components";
import Footer from "@/components/Footer/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Header />
      <div
        style={{
          minHeight: "calc(100dvh - 21rem)",
          maxWidth: "87.2rem",
          width: "100%",
        }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
