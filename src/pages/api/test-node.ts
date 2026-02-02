export const prerender = false;

export async function GET() {
  return new Response(
    JSON.stringify({
      runtime: process.env.VERCEL_RUNTIME ?? 'unknown',
      node: process.versions.node,
    }),
    {
      headers: { 'content-type': 'application/json' },
    }
  );
}
