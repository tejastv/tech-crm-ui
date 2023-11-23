import { toast } from "react-toastify";

export const useToaster = () => {
  const errorMessageToaster = (errorMessage: any, callFrom: string) => {
    if (callFrom == "single") {
      toast.error(errorMessage);
    } else {
      let errorMessages = "";
      errorMessage.forEach((error: any) => {
        if (error) {
          errorMessages += `${error.message}\n`;
        }
      });
      toast.error(errorMessages);
    }
  };

  const successMessageToaster = (successMessage: string) =>
    toast.success(successMessage);

  return { errorMessageToaster, successMessageToaster };
};
