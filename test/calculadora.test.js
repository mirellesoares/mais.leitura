// @ts-check
import calculadora from "../models/calculadora";

test("Criando primeiro test", () => {
  console.log("OIE");
});

test("Soma de 2+2 deve ser 4", () => {
  const resultado = calculadora.adicao(2, 2);
  expect(resultado).toBe(4);
});

test("Soma de 2+4 deve ser 6", () => {
  const resultado = calculadora.adicao(2, 4);
  expect(resultado).toBe(6);
});