import toast from "react-hot-toast";

export const darkToast = (message: string) => {
  return toast.error(message, {
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });
};

export const lightToast = (message: string) => {
  return toast.error(message, {
    style: {
      borderRadius: "10px",
      background: "#fff",
      color: "#333",
    },
  });
};
