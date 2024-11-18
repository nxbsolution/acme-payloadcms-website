import type { CollectionConfig, Block} from "payload";
import { lexicalEditor, BlocksFeature } from "@payloadcms/richtext-lexical";

const MyNameBlock: Block = {
  slug: "my_name_block_fields",
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
}

const MyAgeBlock: Block = {
  slug: "my_age_block_fields",
  fields: [
    {
      name: "my_age",
      type: "number"
    }            
  ],
}

export const MyBlocksCollection: CollectionConfig = {
  slug: "my_blocks_demo_collection",
  fields: [
    {
      name: "temp_value",
      type: "text"
    },
    {
      name: "my_blocks",
      type: "blocks",
      blocks: [
        MyNameBlock,
        MyAgeBlock
      ]      
    },
    {
      name: "my_richtext_lexical",
      type: "richText",
      editor: lexicalEditor({features: ({rootFeatures}) => [
        ...rootFeatures,
        BlocksFeature({
          blocks: [
            MyNameBlock,
            MyAgeBlock
          ]
        })
      ]})
    }
  ],
  labels: {
    plural: 'My Test Blocks',
    singular: 'My Test Block',
  }
}