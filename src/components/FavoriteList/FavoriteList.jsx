import { useDispatch, useSelector } from "react-redux";
import { selectFavorite } from "../../redux/advertsCatalog/selectors";
import {
  DiscrpDiv,
  FlexItem,
  HeartWraper,
  ImgDiv,
  ImgStyle,
  LiStyle,
  SpanStyle,
  TitleStyle,
  WraperP,
} from "./FavoriteList.styled";
import { Heart } from "../../assets/icons/Heart";
import { delFavorite, setFavorite } from "../../redux/advertsCatalog/slice";
import { colors } from "../../constants";

const formatType = (type) => {
  const inputString = type;
  const outputString =
    inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase();
  return outputString;
};
export const FavoriteList = () => {
  const dispatch = useDispatch();
  const favorite = useSelector(selectFavorite);

  const handleFavorite = (advert) => {
    const isFavoriteItem = favorite.some((e) => e.id === advert.id);
    if (isFavoriteItem) {
      dispatch(delFavorite(advert));
    } else {
      dispatch(setFavorite(advert));
    }
  };
  return (
    <>
      {favorite.map((e) => {
        const isFavoriteItem = favorite.some((el) => el.id === e.id);
        const colorHeart = isFavoriteItem ? colors.BLUE : "none";
        const strokeHeart = isFavoriteItem ? "none" : colors.WHITE;
        return (
          <>
            <LiStyle key={e.id}>
              <HeartWraper onClick={() => handleFavorite(e)}>
                <Heart
                  width={18}
                  height={18}
                  color={colorHeart}
                  stroke={strokeHeart}
                />
              </HeartWraper>

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
                  <FlexItem>{e.rentalCompany}</FlexItem>
                  <FlexItem>{formatType(e.type)}</FlexItem>
                </WraperP>
                <WraperP>
                  <FlexItem>{e.model}</FlexItem>
                  <FlexItem>{e.functionalities[0]}</FlexItem>
                </WraperP>
              </DiscrpDiv>
            </LiStyle>
          </>
        );
      })}
    </>
  );
};
