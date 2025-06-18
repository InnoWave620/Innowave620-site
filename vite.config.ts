import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  base: "/",
  server: {
    host: "0.0.0.0", // <--- this is the key part
    port: 5173, // optional: ensures you always use this port
  },
});
