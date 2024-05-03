import ColorProvider from "./color";
import Section from "./section";

export default function Teste() {
  return (
    <ColorProvider>
      <h1>Titulo Principal</h1>
      <Section />
    </ColorProvider>
  );
}
