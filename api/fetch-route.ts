const BASE_URL = "https://menetrendek.hu/menetrend/newinterface/index.php" as const;

const postRoute = async (route: string, data: { [key: string]: any }) => {
  const response = await fetch(BASE_URL + route, { method: "POST", body: JSON.stringify(data) });
  return response.json();
};

export { BASE_URL, postRoute };
