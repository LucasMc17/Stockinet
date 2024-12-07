//NOTHING HERE HAS BEEN TESTED. This will become relevent once we have a db set up

const baseHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const authHeaders = (token) => ({ Authorization: `Bearer ${token}` });

const fetchApi =
  (method) =>
  (url, headers = ({}.body = null)) =>
    fetch(url, {
      body,
      headers: { ...baseHeaders, ...headers },
      method,
    });

const get = fetchApi("get");
const post = fetchApi("post");
const put = fetchApi("put");

let BASE_API_URL;

if (process.env.NODE_ENV === "development") {
  BASE_API_URL = process.env.REACT_APP_API_SERVERS_URL;
}

const Adapter = {
  async getUser({ subId, token }) {
    const url = `${BASE_API_URL}/api/user`;
    const body = JSON.stringify({
      subId: `${subId}`,
    });

    const headers = authHeaders(token);

    const res = await post(url, headers, body);
    const userResponse = await res.json();
    return userResponse;
  },
};
