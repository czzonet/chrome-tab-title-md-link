import webpack from "webpack";

import { devConfig } from "./config/webpack.dev";
import { prodConfig } from "./config/webpack.prod";

const compiler = webpack(
  process.env.ENV == "production" ? prodConfig : devConfig
);

compiler.run((error, stats) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log(
    stats!.toString({
      preset: "normal",
      modules: true,
      colors: true,
    })
  );
});
