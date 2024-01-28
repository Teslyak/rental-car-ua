import { useSelector } from "react-redux";
import { selectCard } from "../../redux/advertsCatalog/selectors";
import BaseModalWrap from "../ModalWrap/ModalWrap";
import {
  Accessories,
  Age,
  AgeSpan,
  AgeValidDiv,
  BtnClose,
  ButtonRentalCar,
  DiscrpDiv,
  DiscrpDivAsc,
  DivSecurMilePrice,
  FlexItem,
  ImgDiv,
  ImgStyle,
  MileageDiv,
  MileageSpan,
  ModalWrap,
  PriceDiv,
  PriceSpan,
  RentalCond,
  SecurityDiv,
  SpanStyle,
  StyledPDiscrp,
  TitleStyle,
  ValidDrivers,
  WraperP,
} from "./Modal.styled";
import { Btn_close } from "../../assets/icons/btn_close";

export const Modal = ({ onClose }) => {
  const card = useSelector(selectCard);
  const formatType = (type) => {
    const inputString = type;
    const outputString =
      inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase();
    return outputString;
  };

  return (
    <>
      <BaseModalWrap onClose={onClose}>
        <ModalWrap>
          <BtnClose onClick={() => onClose()}>
            <Btn_close width={24} height={24} stroke={"#121417"} />
          </BtnClose>

          <ImgDiv>
            <ImgStyle src={card.img} alt="image car" />
          </ImgDiv>

          <TitleStyle>
            {card.make} <SpanStyle>{card.model}</SpanStyle>, {card.year}
          </TitleStyle>

          <DiscrpDiv>
            <WraperP>
              <FlexItem>{card.address.split(/[,.]/)[1]}</FlexItem>
              <FlexItem>{card.address.split(/[,.]/)[2]}</FlexItem>
              <FlexItem>Id:{card.id}</FlexItem>
              <FlexItem>Year:{card.year}</FlexItem>
              <FlexItem>Type:{formatType(card.type)}</FlexItem>
            </WraperP>
            <WraperP>
              <FlexItem>Fuel Consumption:{card.fuelConsumption}</FlexItem>
              <FlexItem>Engine Size:{card.engineSize}</FlexItem>
            </WraperP>
          </DiscrpDiv>
          <StyledPDiscrp>
            The Buick Enclave is a stylish and spacious SUV known for its
            comfortable ride and luxurious features.
          </StyledPDiscrp>
          <Accessories>Accessories and functionalities:</Accessories>
          <DiscrpDivAsc>
            <WraperP>
              <FlexItem>{card.accessories[0]}</FlexItem>
              <FlexItem>{card.accessories[1]}</FlexItem>
              <FlexItem>{card.functionalities[0]}</FlexItem>
            </WraperP>
            <WraperP>
              <FlexItem>{card.accessories[2]}</FlexItem>
              <FlexItem>{card.functionalities[1]}</FlexItem>
              <FlexItem>{card.functionalities[2]}</FlexItem>
            </WraperP>
          </DiscrpDivAsc>
          <RentalCond>Rental Conditions:</RentalCond>
          <AgeValidDiv>
            <Age>
              Minimum age:
              <AgeSpan>
                {card.rentalConditions.split(" ")[2].split("\n")[0]}
              </AgeSpan>
            </Age>
            <ValidDrivers>Valid driver’s license</ValidDrivers>
          </AgeValidDiv>
          <DivSecurMilePrice>
            <SecurityDiv>Security deposite required</SecurityDiv>
            <MileageDiv>
              Mileage:
              <MileageSpan>
                {(card.mileage / 1000)
                  .toLocaleString("en-US", {
                    minimumFractionDigits: 3,
                  })
                  .replace(".", ",")}
              </MileageSpan>
            </MileageDiv>
            <PriceDiv>
              Price:
              <PriceSpan>
                {card.rentalPrice.replace(/^(\$\d+)$/, "$1")}
              </PriceSpan>
            </PriceDiv>
          </DivSecurMilePrice>
          <a href="tel:+380730000000">
            <ButtonRentalCar>Rental Car</ButtonRentalCar>
          </a>
        </ModalWrap>
      </BaseModalWrap>
    </>
  );
};
