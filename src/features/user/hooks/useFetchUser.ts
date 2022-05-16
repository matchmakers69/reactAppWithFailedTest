import { useAppSelector } from "store/hooks/useAppSelector";
import { useEffect } from "react";
import { useAppDispatch } from "store/hooks/useAppDispatch";
import { fetchMemberDetails } from "../actions/userAction";

const useFetchUser = () => {
  const { loading, memberDetails } = useAppSelector((state) => state.userState);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!memberDetails) {
      dispatch(fetchMemberDetails());
    }
  }, [dispatch, memberDetails]);

  return { loading, memberDetails };
};

export default useFetchUser;
