const usersResolvers = {
  Query: {
    user(root, args, context) {
      // Only return the current user, for security
      if (context.user._id === args.id) {
        return context.user;
      }
    },
  },
  User: {
    emails: ({ emails }) => emails,
    profile: ({ profile }) => profile,
  },
  Profile: {
    name: ({ name }) => name,
  },
};

export default usersResolvers;
