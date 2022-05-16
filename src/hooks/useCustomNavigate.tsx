import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AlertContext } from "context/AlertContext";

const useCustomNavigate = () => {
  const alertContext = useContext(AlertContext);

  const navigate = useNavigate();

  return (location: string, removeAlerts = true) => {
    if (removeAlerts) {
      alertContext.removeAllMessages();
    }
    navigate(location);
  };
};

export default useCustomNavigate;
