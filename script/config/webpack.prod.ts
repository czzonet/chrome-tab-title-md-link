import { commonConfig } from "./webpack.common";
import { merge } from "webpack-merge";

export const prodConfig = merge(commonConfig, {
  mode: "production",
  devtool: false,
});
