import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
jest.mock("../../src/hooks/useFetchGifs", () => ({ useFetchGifs: jest.fn() }));

describe("Pruebas sobre Gifgrid", () => {
  const category = "One Punch";
  test("Debe mostrar ícono de carga", () => {
    render(<GifGrid category={category} />);
    expect(screen.getByRole("loading")); // role='loading' en el componente SVG
  });

  
  test("debe mostrarse las imágenes a través del useFetchGifs", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    // probaremos que se muestren las imágenes
    //render(<GifGrid category={category} />);
  });
});
