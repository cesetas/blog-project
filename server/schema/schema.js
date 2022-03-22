const graphql = require("graphql");

const {GraphQLObjectType, GraphQLString} = graphql;

const Author = new GraphQLObjectType({
    name:"Author",
    fields:()=>
})


// query MyQuery {
//     postsConnection {
//       edges {
//         node {
//           author {
//             description
//             name
//             id
//             photo {
//               url
//             }
//           }
//           createdAt
//           slug
//           title
//           excerpt
//           featuredImage {
//             url
//           }
//           categories {
//             name
//             slug
//           }
//         }
//       }
//     }
//   }