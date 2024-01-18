import { colors } from "../../constants";
import { Wrap } from "./Footer.styled";
import { SuzukiLogo } from "./components/Icons/SuzukilLogo";
import { ShkodaLogo } from "./components/Icons/ShkodaLogo";
import { TayotaLogo } from "./components/Icons/TayotaLogo";
import { KiaLogo } from "./components/Icons/KiaLogo";
import { AudiLogo } from "./components/Icons/AudiLogo";
import { VWLogo } from "./components/Icons/VWLogo";

export const Footer = () => {
  return (
    <Wrap>
      <ShkodaLogo width={100} height={100} />
      <TayotaLogo width={100} height={100} color={colors.LIGHT_BLUE} />
      <SuzukiLogo width={100} height={80} />
      <KiaLogo width={100} height={80} />
      <AudiLogo width={70} height={30} color={colors.BLUE} />
      <VWLogo width={40} height={40} />
    </Wrap>
  );
};
