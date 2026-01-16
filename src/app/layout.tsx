import StyledComponentsRegistry from "./lib/registry";
import "./normalize.styles.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <div
            style={{
              height: "100vh",
            }}
          >
            {children}
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
