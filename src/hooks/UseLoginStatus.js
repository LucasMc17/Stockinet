import { useStytchUser } from "@stytch/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, fetchUser } from "../@redux/reducers/User/UserSlice";

// See if we can avoid repeating the useauth steps in instancesd with a log out redirect AND a log in status header

export default function useLoginStatus() {
  const dispatch = useDispatch();
  const { id, loading } = useSelector((s) => s.user);
  const { user } = useStytchUser();

  useEffect(() => {
    if (!loading) {
      // if stytch session, but no redux user, fetch the user from our db
      if (user?.user_id && !id) {
        dispatch(fetchUser(user.user_id));
        // otherwise, if there's no stytch session, clear the redux user
      } else if (!user) {
        dispatch(clearUser());
      }
    }
  }, [loading, id, user]);

  return user;
}
