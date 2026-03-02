import { defineType, defineField } from "sanity";

export const home = defineType({
  name: "home",
  title: "Home Page",
  type: "document",
  fields: [

    // 🔹 Events Section
    defineField({
      name: "events",
      title: "Events",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "slug", type: "string", title: "Event Anchor ID" },
            { name: "image", type: "image", title: "Event Image", options: { hotspot: true } },
          ],
        },
      ],
    }),

    // 🔹 Sliding Section
    defineField({
      name: "slider",
      title: "Sliding Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),

     defineField({
      name: "events2",
      title: "Upcoming Events",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    })
  ],
});