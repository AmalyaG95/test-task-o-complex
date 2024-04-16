const request = async (url: string, method = "GET", body?: {}) => {
  const config: RequestOptions = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, config);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};

export default request;
