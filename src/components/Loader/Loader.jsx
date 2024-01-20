import { Audio } from "react-loader-spinner";
import { CenteredContainer } from "./Loader.styled";
import { colors } from "../../constants";

export const Loader = () => {
  return (
    <CenteredContainer>
      <Audio
        height="80"
        width="80"
        radius="9"
        color={colors.BLUE}
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </CenteredContainer>
  );
};
