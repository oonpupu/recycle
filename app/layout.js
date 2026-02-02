import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-motion="on">
      <body>{children}</body>
    </html>
  );
}
