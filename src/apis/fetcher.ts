const BASE_URL = process.env.MARIMO_BASE_URL;

type FetcherOptions = Omit<RequestInit, "method" | "body">;

async function fetcher<T>(url: string, options: RequestInit): Promise<T> {
  const { body, headers, ...rest } = options;

  const hasBody = !!body;

  const res = await fetch(`${BASE_URL}${url}`, {
    ...rest,
    headers: {
      ...(hasBody ? { "Content-Type": "application/json" } : {}),
      ...headers,
    },
    body,
  });
  const data = await res.json();

  if (!res.ok) {
    // 에러 처리, 추후 수정 예정
    throw new Error(`${res.status} ${res.statusText}`);
  }

  return data as T;
}

export function get<T>(url: string, options?: FetcherOptions): Promise<T> {
  return fetcher<T>(url, { ...options, method: "GET" });
}

export function post<T>(
  url: string,
  body: unknown,
  options?: FetcherOptions
): Promise<T> {
  return fetcher<T>(url, {
    ...options,
    method: "POST",
    body: JSON.stringify(body),
  });
}

export function put<T>(
  url: string,
  body: unknown,
  options?: FetcherOptions
): Promise<T> {
  return fetcher<T>(url, {
    ...options,
    method: "PUT",
    body: JSON.stringify(body),
  });
}

export function patch<T>(
  url: string,
  body: unknown,
  options?: FetcherOptions
): Promise<T> {
  return fetcher<T>(url, {
    ...options,
    method: "PATCH",
    body: JSON.stringify(body),
  });
}

export function del<T>(url: string, options?: FetcherOptions): Promise<T> {
  return fetcher<T>(url, { ...options, method: "DELETE" });
}
