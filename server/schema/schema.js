const { GraphQLList } = require("graphql");
const graphql = require("graphql");
const Post = require("../models/post");
const Author = require("../models/author");

const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema} = graphql;

const PostType = new GraphQLObjectType({
    name:"Post",
    fields:()=> ({
        id: {type: GraphQLID},
        title: {type: GraphQLString},
        category: {type: GraphQLString},
        author: {
            type: AuthorType,
            resolve(parent,args){
                
            }
        }
    })
});

const AuthorType = new GraphQLObjectType({
    name:"Author",
    fields:()=> ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        bio: {type: GraphQLString},
        photo: {type: GraphQLString},
        posts: {
            type: new GraphQLList(PostType),
            resolve(parent, args){
                //get data from db/other source
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields:{
        post:{
            type:PostType,
            args:{id:{type: GraphQLID}},
            resolve(parent, args){
                //get data from db/other source
            }
        },
        author:{
            type:AuthorType,
            args:{id:{type: GraphQLID}},
            resolve(parent, args){
                //get data from db/other source
            }
        },
        posts: {
            type: new GraphQLList(PostType),
            resolve(parent, args){

            },
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args){

            },
        }       
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});


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