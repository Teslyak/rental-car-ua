export const CustomSelectStyled = {
  control: (provided) => ({
    ...provided,
    height: 48,
    border: "none",
    borderRadius: 14,
    backgroundColor: "#f7f7fbdf",
    indicatorsContainer: (provided) => ({
      ...provided,
      position: "relative",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      transition: "transform 0.3s ease", // Додаємо анімацію для плавного зміщення індикатора
      transform: "rotate(0deg)", // Задаємо початковий оберт індикатора
    }),

    color: "#121417",
  }),
  option: (provided) => ({
    ...provided,
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: 1.25,
    color: " rgba(18, 20, 23, 0.5)",
    borderRadius: 14,
  }),
  indicatorSeparator: () => ({ display: "none" }),

  singleValue: (provided) => ({
    ...provided,
    color: "#121417",
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "14px", // Задаємо радіус бордера
    overflowY: "hidden",
  }),
};
