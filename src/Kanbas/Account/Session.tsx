import * as client from "./client";
import { useCallback, useEffect, useState } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
export default function Session({ children }: { children: any }) {
  const [pending, setPending] = useState(true);
  const dispatch = useDispatch();
  const fetchProfile = useCallback(async () => {
    try {
      const currentUser = await client.profile();
      dispatch(setCurrentUser(currentUser));
    } catch (err: any) {
      console.error(err);
    }
    setPending(false);
  }, [dispatch]); // Include dependencies like dispatch
  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);
  if (!pending) {
    return children;
  }
}
