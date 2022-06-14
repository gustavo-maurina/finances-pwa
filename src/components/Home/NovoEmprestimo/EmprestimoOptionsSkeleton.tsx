import Skeleton from "react-loading-skeleton";
import { OptionsGrid } from "./styles";

export const EmprestimoOptionsSkeleton = () => {
  return (
    <OptionsGrid>
      {Array(4)
        .fill("x")
        .map((each, idx) => (
          <Skeleton
            key={idx}
            style={{ width: "90%", padding: "1.3rem", margin: "10px 0" }}
          />
        ))}
    </OptionsGrid>
  );
};
