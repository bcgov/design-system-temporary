const Path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { readdirSync, readFileSync } = require("fs");
const merge = require("webpack-merge");
const parseMD = require("parse-md");
const showdown = require("showdown");
const showdownHighlight = require("showdown-highlight");
let converter = new showdown.Converter({ extensions: [showdownHighlight] });
const marked = require("marked");

/**
 * This reads md file, parses md, adds syntax highlighting.
 *
 * @param {string} mdfile
 */
const parseMarkDown = mdfile => {
  const output = readFileSync(mdfile, "utf8");
  let { metadata, content } = parseMD.default(output);
  content = converter.makeHtml(marked(String(content)));
  return merge({ bodyHtml: content }, metadata);
};

/**
 * This creates page using layout, adds metadata variables
 *
 * @param {string} filename
 * @param {string} mdfile
 * @param {string} sidebar
 * @return {HTMLWebpackPlugin}
 */
const getHtmlWebpackPlugin = (filename, mdfile, sidebar = "") => {
  const baseurl = "index.html" === filename ? "" : "../";
  let options = {
    filename: filename,
    sidebar: sidebar,
    baseurl: baseurl,
    bodyClass: sidebar.length > 10 ? "has-sidebar" : "",
    template: Path.resolve(__dirname, `../html/layout.html`)
  };
  const data = merge(options, parseMarkDown(mdfile));
  console.log(data.filename);
  return new HtmlWebpackPlugin(data);
};

/**
 * Home Page.
 */
const createHomePage = () => {
  return getHtmlWebpackPlugin(
    `index.html`,
    Path.join(__dirname, `../pages/index.md`)
  );
};

/**
 * Creates all the pages inside folders within the Pages Folder.
 */
const createPages = htmlplugin => {
  const directories = ["styles", "documentation", "components"];

  directories.forEach(function(directory) {
    /** Creates Sidebar */
    let sidebar = parseMarkDown(
      Path.join(__dirname, `../html/sidebar/${directory}.md`)
    ).bodyHtml;

    /** reads files in directory */
    readdirSync(Path.resolve(__dirname, `../pages/${directory}`), {
      withFileTypes: true
    }).map(dirent => {
      const page = dirent.name;

      htmlplugin.push(
        getHtmlWebpackPlugin(
          `${directory}/${page.replace(".md", ".html")}`,
          Path.join(__dirname, `../pages/${directory}/${page}`),
          sidebar
        )
      );
    });
  });
  return htmlplugin;
};

/**
 * Creates components from @bcgov/web-components/src/components.
 */
const createComponents = htmlplugin => {
  const sidebar_components = parseMarkDown(
    Path.join(__dirname, `../html/sidebar/components.md`)
  ).bodyHtml;
  readdirSync(
    Path.resolve(
      __dirname,
      "../../node_modules/@bcgov/web-components/src/components"
    ),
    {
      withFileTypes: true
    }
  )
    .filter(dirent => dirent.isDirectory())
    .map(dirent => {
      if (
        !(
          "sass" === dirent.name ||
          "scripts" === dirent.name ||
          "utils" === dirent.name
        )
      ) {
        const page = dirent.name;
        htmlplugin.push(
          getHtmlWebpackPlugin(
            `components/${page.replace("bcgov-", "")}.html`,
            Path.join(
              __dirname,
              `../../node_modules/@bcgov/web-components/src/components/${page}/readme.md`
            ),
            sidebar_components
          )
        );
      }
    });
  return htmlplugin;
};

/**
 * This is the export that is called.
 */
module.exports = function createHTMLPages(baseurl) {
  let htmlplugin = Array();
  /** Home Page. */
  htmlplugin.push(createHomePage());
  /** All Pages */
  createPages(htmlplugin);
  /** Create Components */
  createComponents(htmlplugin);
  return htmlplugin;
};
