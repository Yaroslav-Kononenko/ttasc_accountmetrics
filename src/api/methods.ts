const accessToken = localStorage.getItem('accessToken');

export const BASE_URL = '/ttasc_accountmetrics';

const handleResponse = async (response: Response) => {
  if (response.ok) {
    return response.json();
  } else if (response.status === 401) {
    throw new Error('Unauthorized');
  } else {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }
};

const handleOriginalRequest = async (request: Request, accessToken: string | null) => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
  };

  const response = await fetch(request.url, {
    method: request.method,
    headers,
    body: request.body,
  });

  return handleResponse(response);
};

export const get = async (url: string) => {
  const request = new Request(`${BASE_URL}${url}`, {
    method: 'GET',
  });

  return handleOriginalRequest(request, accessToken);
};

export const post = async (url: string, data?: object) => {
  const request = new Request(`${BASE_URL}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return handleOriginalRequest(request, accessToken);
};

export const put = async (url: string, data: object) => {
  const request = new Request(`${BASE_URL}${url}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return handleOriginalRequest(request, accessToken);
};

export const del = async (url: string) => {
  const request = new Request(`${BASE_URL}${url}`, {
    method: 'DELETE',
  });

  return handleOriginalRequest(request, accessToken);
};
