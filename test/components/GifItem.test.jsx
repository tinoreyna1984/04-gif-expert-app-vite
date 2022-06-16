import { fireEvent, render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Pruebas en GifItem", () => {
  const image = {
    url: "https://media1.giphy.com/media/3o7btLwXyvzqgXQq2U/giphy.gif",
    title: "Gif de prueba",
  };

  test("El objeto de imagen debe coincidir con el snapshot", () => {
    const { container } = render(<GifItem image={image} />);
    screen.debug();
    expect(container).toMatchSnapshot();
  });

  test("El objeto de imagen debe ingresar obligatoriamente", () => {
    render(<GifItem image={image} />);
    expect(screen.getByAltText("Gif de prueba")).toBeTruthy();
  });

  test("Los valores de src y alt deben ser los adecuados", () => {
    render(<GifItem image={image} />);
    const {src, alt} = screen.getByRole("img");
    expect(src).toBe(image.url);
    expect(alt).toBe(image.title);
  });
});
