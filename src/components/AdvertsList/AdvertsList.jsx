import { useSelector } from "react-redux";
import { selectAdvertsList } from "../../redux/advertsCatalog/selectors";
import {
  ButtonStyle,
  DiscrpDiv,
  FlexItem,
  ImgDiv,
  ImgStyle,
  LiStyle,
  SpanStyle,
  TitleStyle,
  WraperP,
} from "./AdvertsList.styled";
const formatType = (type) => {
  const inputString = type;
  const outputString =
    inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase();
  return outputString;
};
export const AdvertsList = () => {
  const advetsItems = useSelector(selectAdvertsList);
  return (
    <>
      {advetsItems.map((e) => {
        return (
          <>
            <LiStyle key={e.id}>
              <ImgDiv>
                <ImgStyle src={e.img} alt="image car" />
              </ImgDiv>
              <TitleStyle>
                <p>
                  {e.make} <SpanStyle>{e.model}</SpanStyle>, {e.year}
                </p>
                <p>{e.rentalPrice}</p>
              </TitleStyle>
              <DiscrpDiv>
                <WraperP>
                  <FlexItem>{e.address.split(/[,.]/)[1]}</FlexItem>
                  <FlexItem>{e.address.split(/[,.]/)[2]}</FlexItem>
                  <FlexItem>id:{e.id}</FlexItem>
                  <FlexItem>Year:{e.year}</FlexItem>
                  <FlexItem>Type:{formatType(e.type)}</FlexItem>
                </WraperP>
                <WraperP>
                  <FlexItem>Fuel Consumption:{e.fuelConsumption}</FlexItem>
                  <FlexItem>Engine Size:{e.engineSize}</FlexItem>
                </WraperP>
              </DiscrpDiv>
              <ButtonStyle type="button">Learn more</ButtonStyle>
            </LiStyle>
          </>
        );
      })}
    </>
  );
};
