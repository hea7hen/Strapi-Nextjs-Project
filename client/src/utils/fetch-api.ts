
interface APIResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    status?: number;
    statusText?: string;
  };
  status?: number;
  statusText?: string;
}

type NextFetchRequestConfig = {
  revalidate?: number | false;
  tags?: string[];
};

interface FetchAPIOptions {
  method: "GET" | "POST" | "PUT" | "DELETE";
  authToken?: string;
  body?: Record<string, unknown>;
  next?: NextFetchRequestConfig;
}

export async function fetchAPI<T = unknown>(url: string, options: FetchAPIOptions): Promise<APIResponse<T>> {
  const { method, authToken, body, next } = options;

  const headers: RequestInit & { next?: NextFetchRequestConfig } = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(authToken && { Authorization: `Bearer ${authToken}` }),
    },
    ...(body && { body: JSON.stringify(body) }),
    ...(next && { next }),
  };

  try {
    const response = await fetch(url, headers);
    const contentType = response.headers.get("content-type");
    if (
      contentType &&
      contentType.includes("application/json") && //Check
      response.ok
    ) {
      return await response.json();
    } else {
      return { success: false, status: response.status, statusText: response.statusText };
    }
  } catch (error) {
    console.error(`Error ${method} data:`, error);
    // throw error; //Catch review
    return {
      success: false,
      error: {
        message: error instanceof Error ? error.message : "An unknown error occurred"
      }
    };
  }
}