import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

export const metadata = {
  title: "Prime Innovation Contracting Co. | Saudi Arabia",
  description: "Prime Innovation Contracting Co. offers Calibration, Contracting, and Fabrication Services in Saudi Arabia. Quality and precision guaranteed.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
