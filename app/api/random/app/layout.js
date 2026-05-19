export const metadata = {
  title: "Space App",
  description: "SpaceComputer Demo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
