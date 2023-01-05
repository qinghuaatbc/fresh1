// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/[name].tsx";
import * as $1 from "./routes/api/joke.ts";
import * as $2 from "./routes/form.tsx";
import * as $3 from "./routes/index.tsx";
import * as $4 from "./routes/message.tsx";
import * as $5 from "./routes/movie.tsx";
import * as $6 from "./routes/test.tsx";
import * as $7 from "./routes/zoneList.tsx";
import * as $$0 from "./islands/Counter.tsx";
import * as $$1 from "./islands/Ip.tsx";
import * as $$2 from "./islands/Message.tsx";
import * as $$3 from "./islands/Movie.tsx";
import * as $$4 from "./islands/Show.tsx";
import * as $$5 from "./islands/Zone.tsx";

const manifest = {
  routes: {
    "./routes/[name].tsx": $0,
    "./routes/api/joke.ts": $1,
    "./routes/form.tsx": $2,
    "./routes/index.tsx": $3,
    "./routes/message.tsx": $4,
    "./routes/movie.tsx": $5,
    "./routes/test.tsx": $6,
    "./routes/zoneList.tsx": $7,
  },
  islands: {
    "./islands/Counter.tsx": $$0,
    "./islands/Ip.tsx": $$1,
    "./islands/Message.tsx": $$2,
    "./islands/Movie.tsx": $$3,
    "./islands/Show.tsx": $$4,
    "./islands/Zone.tsx": $$5,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
