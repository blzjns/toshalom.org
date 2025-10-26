import { serve } from "bun";
import index from "./index.html";

const server = serve({
  routes: {
    // Serve index.html for all unmatched routes.
    "/*": index,
    "/db/:fileName": async req => {
      const fileName = req.params.fileName;

      // const url = new URL(req.url);
      const filePath = `./db/${fileName}`; // Assuming 'public' is your static folder

      try {
        const file = Bun.file(filePath);
        return new Response(file);
      } catch (error) {
        // Handle file not found or other errors
        return new Response("Not Found", { status: 404 });
      }
    },
    "/api/hello": {
      async GET(req) {
        return Response.json({
          message: "Hello, world!",
          method: "GET",
        });
      },
      async PUT(req) {
        return Response.json({
          message: "Hello, world!",
          method: "PUT",
        });
      },
    },

    "/api/hello/:name": async req => {
      const name = req.params.name;
      return Response.json({
        message: `Hello, ${name}!`,
      });
    },
  },

  development: process.env.NODE_ENV !== "production" && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
