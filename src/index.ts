export interface Props {
  x: number;
  y: number;
}

/**
 * Validator class
 */
export class Validator {
  private value = 1;
  private props: Props = { x: 0, y: 0 };

  getValue(): number {
    return this.value;
  }

  setValue(value: number): void {
    this.value = value;
  }
}
