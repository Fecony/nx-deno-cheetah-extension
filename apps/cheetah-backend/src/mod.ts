import cheetah, { Collection } from "cheetah";
import { z } from "zod";

const fastFood = new Collection()
  .get("/burger", () => "🍔")
  .get("/fries", () => "🍟")
  .get("/taco", () => "🌮")
  .get("/pizza", () => "🍕");

const app = new cheetah()
  .use("/fast-food", fastFood)
  .get("/cookie", () => "🍪")
  .get(
    "/pet",
    {
      query: z.object({
        pet: z.union([
          z.literal("cat"),
          z.literal("dog"),
          z.literal("parrot"),
          z.literal("rabbit"),
        ]),
      }),
    },
    (c) => {
      return c.req.query.pet === "cat"
        ? "🐈"
        : c.req.query.pet === "dog"
        ? "🐕"
        : c.req.query.pet === "parrot"
        ? "🦜"
        : "🐇";
    }
  );

app.serve();
