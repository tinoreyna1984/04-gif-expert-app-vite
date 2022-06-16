import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en AddCategory", () => {
  test("Probar cambiar el valor en el input", () => {
    render(<AddCategory addCategory={() => {}} />);
    screen.debug();
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Gifs" } });
    expect(input.value).toBe("Gifs");
  });
  test("Probar submit y llamada de addCategory", () => {
    const inputValue = 'Goku';
    const addCategory = jest.fn();
    render(<AddCategory addCategory={addCategory} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.change(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    //screen.debug();
    expect(addCategory).toHaveBeenCalled();
    expect(addCategory).toHaveBeenCalledWith(inputValue);
  });
  test("no debe llamar a addCategory si el input está vacío", () => {
    const addCategory = jest.fn();
    render(<AddCategory addCategory={addCategory} />);
    const form = screen.getByRole("form");
    fireEvent.submit(form);
    expect(addCategory).not.toHaveBeenCalled();
  });
});
