/**
 * Funcion que comprueba si x es menor que 4
 * @param x numero a comprobar
 * @returns boolean
 */
export const smallerThan4 = (x: number) => {
  if (x < 4) return true;
  return false;
};

/**
 * Funcion que comprueba si x es mayor que 4
 * @param x numero a comprobar
 * @returns boolean
 */
export const greaterThan4 = (x: number) => {
  if (x >= 4) return true;
  return false;
};

/**
 * Eleva x al cuadrado
 * @param x numero a elevar
 * @returns x al cuadrado
 */
export const squared = (x: number) => x * x;

/**
 * Eleva x al cubo
 * @param x numero a elevar
 * @returns x al cubo
 */
export const cubed = (x: number) => x * x * x;
