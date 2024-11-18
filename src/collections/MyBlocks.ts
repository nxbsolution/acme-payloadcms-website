import type { CollectionConfig} from "payload";

export const MyBlocksCollection: CollectionConfig = {
  slug: "my_blocks",
  fields: [
    {
      name: "temp_value",
      type: "text"
    },
    {
      name: "my_test_blocks",
      type: "blocks",
      blocks: [
        {
          slug: "my_name_block",
          fields: [
            {
              name: "my_text1",
              type: "text"
            },
            {
              name: "my_text2",
              type: "text"
            }
          ]
        },
        {
          slug: "my_age_block",
          fields: [
            {
              name: "my_age",
              type: "number"
            }
          ]
        }
      ]
    }
  ],
  labels: {
    plural: 'My Test Blocks',
    singular: 'My Test Block',
  }
}