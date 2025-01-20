//NOTHING HERE HAS BEEN TESTED. This will become relevent once we have a db set up

const baseHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

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
  // Patterns
  async getRecentPatterns() {
    const url = `${BASE_API_URL}/patterns/by-user/recents`;

    const res = await get(url);
    const patterns = await res.json();
    return patterns;
  },
  async getAllPatterns(method, page, type, difficulty) {
    const url = `${BASE_API_URL}/patterns?method=${method}&page=${page}&type=${type}&difficulty=${difficulty}`;

    const res = await get(url);
    const patterns = await res.json();
    return { patterns, page };
  },
  async getPatternsByUser() {
    const url = `${BASE_API_URL}/patterns/by-user`;

    const res = await get(url);
    const patterns = await res.json();
    return patterns;
  },
  async getOnePattern(slug) {
    const url = `${BASE_API_URL}/patterns/${slug}`;

    const res = await get(url);
    const pattern = await res.json();
    return pattern;
  },
  // Users
  async getUser(stytchId) {
    const url = `${BASE_API_URL}/user/by-stytch/${stytchId}`;

    const res = await get(url);
    const user = await res.json();
    return user;
  },
  async signUp(data) {
    const url = `${BASE_API_URL}/user`;

    const body = JSON.stringify(data);

    const res = await post(url, baseHeaders, body);
    const user = await res.json();
    return user;
  },
};

export default Adapter;
