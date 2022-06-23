const buttonEl = document.querySelector('button')!
const input1El = document.getElementById('num1')! as HTMLInputElement
const input2El = document.getElementById('num2')! as HTMLInputElement

const add = (num1: string, num2: string): number => {
  return +num1 + +num2
}

const onClick = (): void => {
  console.log(add(input1El.value, input2El.value))
}

buttonEl.addEventListener("click", onClick)
