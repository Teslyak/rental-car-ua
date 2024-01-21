import { colors } from "../../constants";
export const CustomSelectStyled = {
  control: (provided, state) => ({
    ...provided,
    height: 48,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: colors.PROVINCIAL_PINK,
    borderRadius: 6,

    color: colors.BLUE,
    boborderColor: state.isFocused
      ? colors.PROVINCIAL_PINK
      : colors.PROVINCIAL_PINK,
    "&:hover": {
      borderColor: colors.PROVINCIAL_PINK,
      outline: "none",
    },
    outline: state.isFocused ? "none" : "none",
  }),
  option: (provided, { isSelected }) => ({
    ...provided,
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: 1.25,
    color: isSelected ? colors.WHITE : colors.BLUE,
  }),
  indicatorSeparator: () => ({ display: "none" }),

  singleValue: (provided) => ({
    ...provided,
    color: colors.BLUE,
  }),
};
