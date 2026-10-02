const users = [
  {
    "id": 1,
    "name": "Alex Morgan",
    "email": "alex.morgan@example.com",
    "role": "Admin",
    "isActive": true
  },
  {
    "id": 2,
    "name": "Jordan Lee",
    "email": "jordan.lee@example.com",
    "role": "User",
    "isActive": true
  },
  {
    "id": 3,
    "name": "Taylor Swift",
    "email": "taylor.s@example.com",
    "role": "Moderator",
    "isActive": false
  },
  {
    "id": 4,
    "name": "Casey Jones",
    "email": "casey.j@example.com",
    "role": "User",
    "isActive": true
  },
  {
    "id": 5,
    "name": "Sam Wilson",
    "email": "sam.wilson@example.com",
    "role": "User",
    "isActive": false
  },
  {
    "id": 6,
    "name": "Jamie Oliver",
    "email": "jamie.o@example.com",
    "role": "Editor",
    "isActive": true
  },
  {
    "id": 7,
    "name": "Morgan Freeman",
    "email": "morgan.f@example.com",
    "role": "User",
    "isActive": true
  },
  {
    "id": 8,
    "name": "Chris Evans",
    "email": "chris.e@example.com",
    "role": "Admin",
    "isActive": true
  },
  {
    "id": 9,
    "name": "Pat通 Smith",
    "email": "pat.smith@example.com",
    "role": "User",
    "isActive": false
  },
  {
    "id": 10,
    "name": "Robin Hood",
    "email": "robin.h@example.com",
    "role": "Guest",
    "isActive": true
  }
];

export const getUsers = async () => {
    return users;
}

export const getUserById = async (id) => {
    const user = users.find(u => u.id === id);

    return user;
}

//---- this is module appraoch


//--this is common js appraoch
// module.exports = {
//     getUsers
// }