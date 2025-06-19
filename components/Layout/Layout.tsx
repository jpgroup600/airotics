import localFont from "next/font/local";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

type Props = {
  children: React.ReactNode;
};

const montreal = localFont({
  src: [
    { path: "./fonts/Montreal-Regular.woff", weight: "400", style: "normal" },
    { path: "./fonts/Montreal-Bold.woff", weight: "700", style: "normal" },
  ],
  variable: "--font-montreal",
});

const arpDisplay = localFont({
  src: "./fonts/ARP-Display.woff2",
  variable: "--font-arp-display",
});

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main className={`font-sans ${montreal.variable} ${arpDisplay.variable}`}>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
