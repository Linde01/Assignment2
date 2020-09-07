const users = [
  {
    id: 1,
    username: "Catllia",
    password: "linde123",
    roleId: 1,
  },
  {
    id: 2,
    username: "Andrian",
    password: "pontejo123",
    roleId: 3,
  },
  {
    id: 3,
    username: "Archie",
    password: "beliber123",
    roleId: 3,
  },
  {
    id: 4,
    username: "Fermin",
    password: "Gicangao123",
    roleId: 2,
  },
];

const roles = [
  {
    id: 1,
    label: "Adminstrator",
  },
  {
    id: 2,
    label: "Student",
  },
  {
    id: 3,
    label: "Instructor",
  },
];

users.forEach((user) => {
  user.role = roles.find((role) => {
    if (role.id === user.roleId) {
      return role;
    }
  }).label;
  delete user.password;
});

console.log(users);
