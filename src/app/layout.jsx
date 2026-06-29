import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import { AuthProvider } from '@/context/AuthProvider';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}