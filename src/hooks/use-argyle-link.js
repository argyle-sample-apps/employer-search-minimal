import { useEffect, useState } from "react";
import { useUser } from "./use-user";

export const useArgyleLink = ({ onClose, selectedItemId }) => {
  const [linkInstance, setLinkInstance] = useState(null);
  const { data: user } = useUser();

  useEffect(() => {
    if (!user?.user_token) {
      return;
    }

    const link = window.Argyle.create({
      sandbox: true,
      userToken: user.user_token,
      onClose,
      ...(selectedItemId && { items: [selectedItemId] }),
    });

    setLinkInstance(link);
  }, [user, onClose, selectedItemId]);

  return {
    linkInstance,
  };
};
