import { createExtension } from "cheetah";

/**
 * Awesome extension for showing off 💪
 */
export const exampleExtension = createExtension({
  onResponse({ c, ...re }) {
    c.res.header("x-powered-by", "cheetah");

    console.log(re);
  },
});
