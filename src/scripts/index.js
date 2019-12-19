import "core-js";
import "highlight.js/scss/default.scss";
import "@bcgov/web-components/src/components/sass/style.scss";
import {
  applyPolyfills,
  defineCustomElements
} from "@bcgov/web-components/html/dist/loader";

applyPolyfills().then(() => {
  defineCustomElements(window);
});
