import { TMethods } from "./templateMethods";

/**
 * @description Al reducir resta los elementos
 */
export class FilterMapSubReduce extends TMethods {
  /**
   * Constructor de la clase FilterMapSubReduce
   * @param vector Vector que se desea almacenar
   */
  constructor(vector: number[]) {
    super(vector);
  }

  /**
   * Reduce el vector a la resta de sus elementos
   * @param v Vector a reducir
   * @returns Resultado de la resta
   */
  protected reduce(): number {
    let reduced: number = 0;
    this.vector.forEach((element) => (reduced -= element));
    return reduced;
  }
}
