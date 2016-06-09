const schema = [`
  type Email {
    address: String
    verified: Boolean
  }
  type Profile {
    name: Name
  }
  type Name {
    first: String
    last: String
  }
  type User {
    emails: [Email]
    profile: Profile
  }
`];

export default schema;
