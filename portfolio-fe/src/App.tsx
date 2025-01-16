import { ThemeProvider } from "./components/ui/theme-provider";
import { ModeToggle } from "./components/ui/mode-toggle";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="bg-background text-foreground">
          aaaaaaa
        </div>
        <ModeToggle />
      </ThemeProvider>
    </>
  );
}

export default App;
