import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const {setUser} = useAuthContext()
  const signup = async ({
    fullName,
    username,
    password,
    confirmpassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmpassword,
      gender,
    });

    if (!success) return;

    setLoading(true);
    try {
      const response = await fetch("http://localhost:8000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: fullName,
          username,
          password,
          confirmpassword,
          gender,
        }),
      });
      const data = await response.json();
      if(data.err){
        toast.error(data.err);
        return;
      }

      localStorage.setItem("chat-user", JSON.stringify(data));

      setUser(data);

      console.log(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { signup, loading };
};

export default useSignup;

function handleInputErrors({
  fullName,
  username,
  password,
  confirmpassword,
  gender,
}) {
  if (!fullName || !username || !password || !confirmpassword || !gender) {
    toast.error("Please fill all the fields");
    return false;
  }
  if (password !== confirmpassword) {
    toast.error("Password and Confirm Password do not match");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }
  return true;
}
