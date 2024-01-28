import { CustomSelectStyled } from "./CustomSelect.styled";
import {
  BtnResetDiv,
  BtnResetPriceDiv,
  Button,
  DivWraper,
  InputFrom,
  InputTo,
  InputWrap,
  LabelBrandTo,
  LabelInput,
  SelectStyled,
  SelectStyledPrice,
  WrapInputFromTo,
  WrapSelectFrom,
  WrapSelectTo,
} from "./Filters.styled";
import brands from "../../assets/makes.json";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAdvertsList } from "../../redux/advertsCatalog/selectors";
import { setFilters } from "../../redux/advertsCatalog/slice";
import { Btn_close } from "../../assets/icons/btn_close";

export const Filters = () => {
  const adverts = useSelector(selectAdvertsList);
  const [selectedOptionBrand, setSelectedOptionBrand] = useState("");
  const [selectedOptionPrice, setSelectedOptionPrice] = useState("");

  const dispatch = useDispatch();

  const options = brands.map((e) => {
    const newOptions = { value: e, label: e };
    return newOptions;
  });

  const optionsPrice = () => {
    const options = [];
    for (let i = 5; i <= 500; i += 5) {
      options.push({ value: i.toString(), label: `To ${i.toString()}$` });
    }
    return options;
  };

  const handleChangeBrand = (value) => {
    setSelectedOptionBrand(value);
  };
  const handleChangePrice = (value) => {
    setSelectedOptionPrice(value);
  };
  const handleSearch = () => {
    const dataFilters = {
      brand: selectedOptionBrand.value ? selectedOptionBrand.value : "",
      price: selectedOptionPrice.value ? selectedOptionPrice.value : "",
    };

    if (dataFilters.brand === "All") {
      dispatch(setFilters(adverts));
      setSelectedOptionBrand("");
      setSelectedOptionPrice("");
      return;
    }
    if (dataFilters.brand && dataFilters.price) {
      const isFilteredAds = adverts.filter(
        (e) =>
          e.make === dataFilters.brand &&
          parseInt(e.rentalPrice.replace(/\D/g, ""), 10) ===
            parseInt(dataFilters.price)
      );

      dispatch(setFilters(isFilteredAds));

      return;
    }
    if (dataFilters.brand || dataFilters.price) {
      const isFilteredAds = adverts.filter(
        (e) =>
          e.make === dataFilters.brand ||
          parseInt(e.rentalPrice.replace(/\D/g, ""), 10) ===
            parseInt(dataFilters.price)
      );
      dispatch(setFilters(isFilteredAds));
      return;
    }
  };

  return (
    <>
      <DivWraper>
        <WrapSelectFrom>
          {selectedOptionBrand ? (
            <BtnResetDiv
              onClick={() => {
                setSelectedOptionBrand("");
              }}
            >
              <Btn_close
                width={24}
                height={24}
                stroke={" rgba(18, 20, 23, 0.5)"}
              />
            </BtnResetDiv>
          ) : null}

          <LabelBrandTo htmlFor="brands">Car brand</LabelBrandTo>
          <SelectStyled
            options={options}
            value={selectedOptionBrand}
            styles={CustomSelectStyled}
            onChange={(value) => handleChangeBrand(value)}
            placeholder="Enter the text"
            name="brand"
            id="brands"
          />
        </WrapSelectFrom>
        <WrapSelectTo>
          {selectedOptionPrice ? (
            <BtnResetPriceDiv
              onClick={() => {
                setSelectedOptionPrice("");
              }}
            >
              <Btn_close
                width={24}
                height={24}
                stroke={" rgba(18, 20, 23, 0.5)"}
              />
            </BtnResetPriceDiv>
          ) : null}
          <LabelBrandTo htmlFor="price">Price/ 1 hour</LabelBrandTo>
          <SelectStyledPrice
            options={optionsPrice()}
            value={selectedOptionPrice}
            styles={CustomSelectStyled}
            onChange={(value) => handleChangePrice(value)}
            placeholder="To $"
            name="price"
          />
        </WrapSelectTo>
        <WrapInputFromTo>
          <LabelInput htmlFor="from">Сar mileage / km</LabelInput>
          <InputWrap>
            <InputFrom type="text" placeholder="From" id="from" />
            <InputTo type="text" placeholder="To" />
          </InputWrap>
        </WrapInputFromTo>
        <Button onClick={() => handleSearch()}>Search</Button>
      </DivWraper>
    </>
  );
};
