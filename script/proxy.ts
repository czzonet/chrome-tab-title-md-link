import { Options, createProxyMiddleware } from "http-proxy-middleware";
import chalk from "chalk";
import { Express } from "express";

const renderLink = (str: String) => chalk.magenta.underline(str);

type ProxyTable = {
  [key: string]: Options;
};

const proxyTable: ProxyTable = {
  "/": {
    target: "",
    changeOrigin: true,
  },
};

export const proxy = (app: Express) => {
  Object.entries(proxyTable).forEach(([path, options]) => {
    const from = path;
    const to = options.target as string;

    const tip = `Proxy from ${renderLink(from)} to ${renderLink(to)}`;
    console.log(tip);

    options.logLevel ? null : (options.logLevel = "warn");

    app.use(createProxyMiddleware(options));
  });

  process.stdout.write("\n");
};
