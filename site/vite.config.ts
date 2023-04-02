import { defineConfig } from "vite";
import devtools from "solid-devtools/vite";
import solid from "solid-start/vite";
import dotenv from "dotenv";
// @ts-ignore
import staticAdapter from "solid-start-static";

const packages = await (async () => {
  try {
    return (await import("./src/_generated/packages.json")).default;
  } catch (e) {
    throw new Error("No packages found. Did you run `pnpm generate`?");
  }
})();

export default defineConfig(() => {
  dotenv.config();
  return {
    plugins: [
      devtools({
        autoname: true,
        locator: {
          componentLocation: true,
          targetIDE: "vscode",
        },
      }),
      solid({
        adapter: staticAdapter(),
        prerenderRoutes: ["/", ...packages.map(({ name }) => `/package/${name}`)],
      }),
    ],
  };
});
