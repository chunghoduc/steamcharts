import { serve } from "./deps.ts";
import { join } from "https://deno.land/std@0.106.0/path/mod.ts";

const handler = async (request: Request): Promise<Response> => {
    const url = new URL(request.url);
    let filePath = join(Deno.cwd(), "public/html", url.pathname);

    try {
        const file = await Deno.readFile(filePath);
        const contentType = "text/html"; // You can add more logic to handle different content types if needed
        return new Response(file, {
            headers: { "content-type": contentType },
        });
    } catch (error) {
        if (error instanceof Deno.errors.NotFound) {
            return new Response("404 Not Found", { status: 404 });
        } else {
            return new Response("500 Internal Server Error", { status: 500 });
        }
    }
};

console.log("HTTP webserver running. Access it at: http://localhost:8000/");
await serve(handler, { port: 8000 });