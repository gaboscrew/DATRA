import './globals.css';

export const metadata = {
  title: 'Datra',
  description: 'Landing page de Datra',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
