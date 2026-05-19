"use client";

import { useState } from "react";

export default function Home() {
const [data, setData] = useState("");

const getRandom = async () => {
const res = await fetch("/api/random");
const json = await res.json();

```
setData(JSON.stringify(json));
```

};

return ( <main> <h1>SpaceComputer Demo</h1>

```
  <button onClick={getRandom}>
    Generate Random
  </button>

  <div>{data}</div>
</main>
```

);
}
