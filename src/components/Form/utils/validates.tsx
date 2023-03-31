export const validateName = (name: string) => {
  if (/^[A-ZА-ЯЁ][a-zA-Zа-яА-ЯёЁ]*$/u.test(name) && name.length > 1) {
    return true;
  }
  return false;
};

export const validateSurname = (name: string) => {
  if (/^[A-ZА-ЯЁ][a-zA-Zа-яА-ЯёЁ]*$/u.test(name) && name.length > 1) {
    return true;
  }
  return false;
};

export const validateImageUrl = (name: string) => {
  if (name.length === 0) return false;
  return true;
};

export const validateDate = (name: string) => {
  const inputDate = new Date(name);
  const currentDate = new Date();
  const minDate = new Date(
    currentDate.getFullYear() + 10,
    currentDate.getMonth(),
    currentDate.getDate()
  );

  if (inputDate < currentDate && inputDate <= minDate) {
    return true;
  }
  return false;
};

export const validateCategory = (name: string) => {
  if (name.length === 0) return false;
  return true;
};

export const validateGender = (selectedValue: string) => {
  if (selectedValue && selectedValue.length > 2) {
    return true;
  }
  return false;
};
