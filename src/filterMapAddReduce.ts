import { TMethods } from "./templateMethods";

/**
 * @description Al reducir suma los elementos
 */
export class FilterMapAddReduce extends TMethods {
  /**
   * Constructor de la clase FilterMapAddReduce
   * @param vector Vector que se desea almacenar
   */
  constructor(vector: number[]) {
    super(vector);
  }

  /**
   * Reduce el vector a la suma de sus elementos
   * @returns Resultado de la suma
   */
  protected reduce(): number {
    let reduced: number = 0;
    this.vector.forEach((element) => (reduced += element));
    return reduced;
  }
}
