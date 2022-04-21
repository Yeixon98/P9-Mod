/**
 * @class Clase abstracta
 */
export abstract class TMethods {
  public result: number = 0;
  /**
   * Constructor de la clase abstracta
   * @param vector Array de numeros
   */
  constructor(protected vector: number[]) {}

  /**
   * Algoritmo que realiza la operación map y reduce sobre el vector que almacena la clase
   * @param funcionFilter Función que realizará la función filter
   * @param funcionMap Función que realizará la función map
   * @returns resultado del reduce
   */
  public run(
    funcionFilter: (x: number) => boolean,
    funcionMap: (x: number) => number
  ): number {
    let filtered: number[] = this.filter(funcionFilter);
    this.afterFilter(filtered);
    let mapped: number[] = this.map(funcionMap);
    this.afterMap(mapped);
    let reduced: number = this.reduce();
    this.afterReduce(reduced);
    return reduced;
  }

  /**
   * Método que aplica una operación a cada uno de los elementos del array
   * @param funcion Operación que realiza
   * @returns Vector con el resultado
   */
  protected filter(funcion: (x: number) => boolean): number[] {
    let result: number[] = [];
    this.vector.forEach((element) => {
      if (funcion(element)) result.push(element);
    });
    return result;
  }

  /**
   * Método que aplica una operación a cada uno de los elementos del array
   * @param funcion Operación que realiza
   * @returns Vector con el resultado
   */
  protected map(funcion: (x: number) => number): number[] {
    let result: number[] = [];
    this.vector.forEach((element) => result.push(funcion(element)));
    return result;
  }

  /**
   * Método abstracto que reduce los valores de un vector a un único valor
   */
  protected abstract reduce(): number;

  /**
   * Método Hook para actualizar el array
   * @param v Array actualizado
   */
  protected afterFilter(v: number[]) {
    this.vector = v;
    console.log("Despues del filtrado \n", this.vector);
  }

  /**
   * Método Hook para actualizar el array
   * @param v Array actualizado
   */
  protected afterMap(v: number[]) {
    this.vector = v;
    console.log("Despues del Map\n", this.vector);
  }

  /**
   * Método Hook para añadir el resultado de reduce
   * @param n Valor a añadir
   */
  protected afterReduce(n: number) {
    this.result = n;
    console.log("Resultado \n", this.result);
  }
}
