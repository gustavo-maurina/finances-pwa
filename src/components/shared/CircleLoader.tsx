import { Oval } from "react-loader-spinner";
import { theme } from "../../themes/theme";

export const CircleLoader = () => {
  return (
    <Oval
      ariaLabel="loading-indicator"
      height={80}
      width={80}
      strokeWidth={5}
      visible
      wrapperClass="spinner-wrapper"
      color={theme.accentPink}
      secondaryColor="gray"
    />
  );
};
