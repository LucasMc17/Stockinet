"use strict";

import { config } from "dotenv";
config();
import { client } from "../../backendUtils/stytchClient.js";

const { results } = await client.users.search({
  //   limit: 2,
  //   query: {
  //     operator: "OR",
  //     operands: [
  //       {
  //         filter_name: "email_address",
  //         filter_value: ["test@stockinette.co"],
  //       },
  //       {
  //         filter_name: "email_address",
  //         filter_value: ["test2@stockinette.co"],
  //       },
  //     ],
  //   },
});

console.log(results);
