db.createUser({
  user: "connido",
  pwd: "password",
  roles: [
    {
      role: "readWrite",
      db: "connido",
    },
  ],
});
