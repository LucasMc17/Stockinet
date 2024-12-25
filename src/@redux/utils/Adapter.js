//NOTHING HERE HAS BEEN TESTED. This will become relevent once we have a db set up

const baseHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const authHeaders = (token) => ({ Authorization: `Bearer ${token}` });

const fetchApi =
  (method) =>
  (url, headers = {}, body = null) =>
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
    const url = `${BASE_API_URL}/user`;
    const body = JSON.stringify({
      subId: `${subId}`,
    });

    const headers = authHeaders(token);

    const res = await post(url, headers, body);
    const userResponse = await res.json();
    return userResponse;
  },
  async getAllPatterns() {
    // TEMPORARY ADAOTER PATH FOR TESTING
    const url = `${BASE_API_URL}/patterns`;

    const res = await get(url);
    const patterns = await res.json();
    return patterns;
  },
  async getOnePattern(id) {
    const url = `${BASE_API_URL}/patterns/${id}`;

    const res = await get(url);
    const pattern = await res.json();
    return pattern;
  },
  async getUser(stytchId) {
    const url = `${BASE_API_URL}/user/by-stytch/${stytchId}`;

    const res = await get(url);
    const user = await res.json();
    return user;
  },
  // async authenticate(data) {
  //   const url = `${BASE_API_URL}/auth`;

  //   const body = JSON.stringify({ ...data, session_duration_minutes: 10 });
  //   const res = await post(url, baseHeaders, body);
  //   console.log(res.json());
  // },
};

export default Adapter;
