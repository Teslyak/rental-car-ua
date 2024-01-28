import { CustomSelectStyled } from "./CustomSelectBrand.styled";
import { CustomSelectStyledPrice } from "./CustomSelectPrice.styled";
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
  SpanInputFrom,
  SpanInputTo,
  SpanToPrice,
  WrapInputFromTo,
  WrapSelectFrom,
  WrapSelectTo,
} from "./Filters.styled";
import brands from "../../assets/makes.json";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAdvertsList } from "../../redux/advertsCatalog/selectors";
import { setFilters } from "../../redux/advertsCatalog/slice";
import { Btn_close } from "../../assets/icons/btn_close";

export const Filters = () => {
  const adverts = useSelector(selectAdvertsList);
  const [selectedOptionBrand, setSelectedOptionBrand] = useState("");
  const [selectedOptionPrice, setSelectedOptionPrice] = useState("");
  const [optionPrice, setOptionPrice] = useState();
  const [inputFrom, setInputFrom] = useState("");
  const [inputTo, setInputTo] = useState("");
  const dispatch = useDispatch();
  const optionsPrice = () => {
    const options = [];
    for (let i = 5; i <= 200; i += 5) {
      options.push({
        label: i.toString(),
        value: i.toString(),
      });
    }
    return options;
  };

  useEffect(() => {
    setOptionPrice(optionsPrice());
  }, []);

  const options = brands.map((e) => {
    const newOptions = { value: e, label: e };
    return newOptions;
  });

  const handleChangeBrand = (value) => {
    setSelectedOptionBrand(value);
  };
  const handleChangePrice = (value) => {
    setSelectedOptionPrice(value);
  };
  const handleInputFrom = (e) => {
    if (/^\d+(,\d*)?$/.test(e.target.value) || e.target.value === "") {
      setInputFrom(e.target.value);
    }
  };
  const handleInputTo = (e) => {
    if (/^\d+(,\d*)?$/.test(e.target.value) || e.target.value === "") {
      setInputTo(e.target.value);
    }
  };
  const handleSearch = () => {
    const dataFilters = {
      brand: selectedOptionBrand.value ? selectedOptionBrand.value : "",
      price: selectedOptionPrice.value ? selectedOptionPrice.value : "",
      from: inputFrom ? inputFrom : "",
      to: inputTo ? inputTo : "",
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
    if (dataFilters.from && dataFilters.to) {
      const isFilteredAds = adverts.filter(
        (e) =>
          parseInt(e.mileage) >= parseInt(inputFrom.replace(",", "")) &&
          parseInt(e.mileage) <= parseInt(inputTo.replace(",", ""))
      );

      dispatch(setFilters(isFilteredAds));
      setInputFrom("");
      setInputTo("");
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
            options={optionPrice}
            styles={CustomSelectStyledPrice}
            value={selectedOptionPrice}
            onChange={(value) => handleChangePrice(value)}
            placeholder=""
            name="price"
          />
          <SpanToPrice>To&nbsp;{selectedOptionPrice.value}&nbsp;$</SpanToPrice>
        </WrapSelectTo>
        <WrapInputFromTo>
          <LabelInput htmlFor="from">Сar mileage / km</LabelInput>
          <InputWrap>
            <SpanInputFrom>From</SpanInputFrom>
            <InputFrom
              type="text"
              id="from"
              onChange={handleInputFrom}
              value={inputFrom}
            />
            <SpanInputTo>To</SpanInputTo>
            <InputTo type="text" onChange={handleInputTo} value={inputTo} />
          </InputWrap>
        </WrapInputFromTo>
        <Button onClick={() => handleSearch()}>Search</Button>
      </DivWraper>
    </>
  );
};
