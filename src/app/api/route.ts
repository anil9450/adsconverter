import { minify } from "html-minifier-terser";
import generateScript from "@/utils/script";

export async function POST(request: Request) {
  const { adsSlot, url } = await request.json();

  const generatedScript = generateScript({ adsSlot, url });

  const resp = await minify(generatedScript, {
    minifyJS: true,
    minifyCSS: true,
    collapseWhitespace: true,
  });
  return new Response(JSON.stringify(resp));
}
