const fs = require("node:fs/promises");
const path = require("path");

export default async function Section() {
  const file = await fs.readFile(
    path.join(process.cwd(), "public", "text.txt"),
    {
      encoding: "utf8",
    },
  );

  return (
    <section>
      <h3>Titulo</h3>
      <p>{file}</p>
    </section>
  );
}
