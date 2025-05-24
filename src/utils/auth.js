import { getUsers } from "./Storage";

export const setCurrentUser = (user)=>{
    localStorage.setItem("currentUser",JSON.stringify(user))
}

export const getCurrentUser = ()=>{
    const user = localStorage.getItem("currentUser");
  return user ? JSON.parse(user) : null;
}

export const logout = ()=>{
    localStorage.removeItem("currentUser");
}

export const login = (email , password)=>{
    const users = getUsers()
    console.log(users)
  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user)); // ✅ THIS LINE IS CRUCIAL
    return { success: true };
  } else {
    return { success: false, message: "Invalid email or password" };
  }
};