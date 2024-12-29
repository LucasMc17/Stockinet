import { useStytchUser } from "@stytch/react";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, fetchUser } from "../@redux/reducers/User/UserSlice";

// There's stuff to clean up here. Using a useEffect for one, see if we can avoid repeating the useauth steps in instancesd with a log out redirect AND a log in status header

export default function UseLoginStatus() {
  const dispatch = useDispatch();
  const { id, loading } = useSelector((s) => s.user);
  const { user } = useStytchUser();
  if (user?.user_id && !id && !loading) {
    dispatch(fetchUser(user.user_id));
  } else if (!user && !loading) {
    dispatch(clearUser());
  }
  return user;
}
