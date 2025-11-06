import bcrypt from 'bcryptjs';

const password = "hunter123";
const saltRounds = 14;


// /register /forgotpassword
const hashedPassword = await bcrypt.hash(password, saltRounds)

const savedHashedPassword = "$2b$14$jz5uy/IxSApzkOX4saNRNeAdPnVIYy0e0mXf5EVQ7iWb7/bcoUanC";
const comparePassword = "hunter123";

// /login /
const isSame = await bcrypt.compare(comparePassword, savedHashedPassword);
console.log(isSame);

console.log(hashedPassword);