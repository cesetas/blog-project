const { GraphQLList } = require("graphql");
const graphql = require("graphql");
const Post = require("../models/post");
const Author = require("../models/author");
const { GraphQLInt } = require("graphql");
const { GraphQLNonNull } = require("graphql");

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
                return Author.findById(parent.authorId)
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
                return Post.find({authorId: parent.id})
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    //fields: () => ({
    fields:{
        post:{
            type:PostType,
            args:{id:{type: GraphQLID}},
            resolve(parent, args){
                //get data from db/other source
                return Post.findById(args.id)
            }
        },
        author:{
            type:AuthorType,
            args:{id:{type: GraphQLID}},
            resolve(parent, args){
                //get data from db/other source
                return Author.findById(args.id)
            }
        },
        posts: {
            type: new GraphQLList(PostType),
            resolve(parent, args){
                return Post.find({})
            },
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args){
                return Author.find({})
            },
        }       
    }
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addAuthor: {
            type: AuthorType,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
                age: {type: GraphQLInt},
            },
            resolve(parent, args) {
                let author = new Author({
                    name: args.name,
                })
                return author.save()
            }
        },
        addPost: {
            type: PostType,
            args: {
                title: {type: GraphQLString},
                authorId: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parent, args) {
                let post = new Post({
                    title: args.title,
                })
                return post.save()
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
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