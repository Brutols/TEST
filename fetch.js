const fetchRequest = async ({ url, key = "", method, data = "", id = "" }) => {
  try {
    const requestOptions = {
      method: method,
    };

    if (key !== "") {
      requestOptions.headers = {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/txt",
      };
    }

    if (data !== "") {
      requestOptions.body = JSON.stringify(data);
    }

    const resp = await fetch(url + id, requestOptions);

    if (!resp.ok) {
      throw new Error(`something went wrong ${resp.status}`);
    }
    const json = await resp.json();
    return json;
  } catch (error) {
    alert(`error: ${error}`);
  }
};