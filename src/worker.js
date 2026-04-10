export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const response = await env.ASSETS.fetch(request);

    // Keep normal static file behavior when the asset exists.
    if (response.status !== 404) {
      return response;
    }

    // For extension-less routes, fallback to index.html.
    if (request.method === "GET" && !url.pathname.includes(".")) {
      const indexUrl = new URL("/", request.url);
      return env.ASSETS.fetch(new Request(indexUrl, request));
    }

    return response;
  }
};

