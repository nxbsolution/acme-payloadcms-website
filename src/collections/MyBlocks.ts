import type { Field } from 'payload'

export const MyBlocksField: Field = {
  name: "blocks",// ...
  type: 'blocks',
  blocks: [
    // ...
  ],
}


// import { CollectionConfig } from 'payload';

// export const MyBlocks: CollectionConfig = {
//   slug: "my-blocks",
//   fields: [
//     {
//       name: "test-blocks",
//       type: "blocks",
//       blocks: [
//         {
//           name: "my_name",
//           type: "text"
//         }
//       ]
//     }
//   ]
// }