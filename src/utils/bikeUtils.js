// Archivo para manejar algunos utils
import {
  DAY_LIMIT,
  ELECTRIC,
  MAX_PRICE,
  MIN_PRICE,
  NORMAL,
  NORMAL_RENT_DAYS,
  VINTAGE,
  VINTAGE_RENT_DAYS
} from "./constants";

// getTypeNameBike sirve para mostrar un nombre amigable al usuario, podria escalarse a una especie de i18n o traductor de keys dependiendo la magnitud del proyecto
const getTypeNameBike = (type) => {
  const typeNames = {
    [ELECTRIC]: 'Eléctrica',
    [NORMAL]: 'Normal',
    [VINTAGE]: 'Antigua'
  };

  return typeNames[type] || '-';
}

const getBasePrice = (numberDay) => {
  if (numberDay >= DAY_LIMIT) return MAX_PRICE;
  return MIN_PRICE;
}

const getNormalAmountStrategy = (rentDays, basePrice) => {
  if (rentDays <= NORMAL_RENT_DAYS) {
    return basePrice * NORMAL_RENT_DAYS;
  }
  return basePrice * rentDays;
}

const getVintageAmountStrategy = (rentDays, basePrice) => {
  if (rentDays <= VINTAGE_RENT_DAYS) {
    return basePrice * VINTAGE_RENT_DAYS;
  }
  return basePrice * rentDays;
}

const getAmountStrategy = (rentDays, bikeType, basePrice) => {
  const amountStrategy = {
    [NORMAL]: getNormalAmountStrategy(rentDays, basePrice),
    [VINTAGE]: getVintageAmountStrategy(rentDays, basePrice),
  }

  return amountStrategy[bikeType];
}

const getTotalAmount = (numberDay, rentDays, bikeType) => {
  const basePrice = getBasePrice(numberDay);

  const valueFromStrategy = getAmountStrategy(rentDays, bikeType, basePrice);

  return valueFromStrategy || basePrice * rentDays;
}

export {
  getTypeNameBike,
  getTotalAmount
}