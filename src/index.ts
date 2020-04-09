export class C {
  private x = 10;
  getX = () => this.x;
  setX = (newVal: number) => {
    this.x = newVal;
  };
}

export let x = new C();
export let y = { ...{ some: "value" } };

function printLabel(labeledObj: { label: string }) {
  console.log(labeledObj.label);
}

function isAddress(str: string) {
  return str.length === 58;
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
