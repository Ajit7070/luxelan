import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import SmoothScroll from "@/components/layout/SmoothScroll";

export const metadata = {
  title: "Luxelan | Luxury Interior Design",
  description: "Experience elegant and luxurious interior design with Luxelan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        <CustomCursor />
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
