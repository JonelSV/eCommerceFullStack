import bcrypt from 'bcryptjs'

// use bcryptjs and not just bcrypt above
// npm i bcryptjs
// synchronous hashSync method (string, salt length to generate is default to 10) synchronously generate a hash for a given string

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Trial User One',
        email: 'Trial1@example.com',
        password: bcrypt.hashSync('123456', 10),
     
    },
    {
        name: 'Trial User Two',
        email: 'Trial2@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users