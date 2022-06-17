import { useFetchGifs } from "../../src/hooks/useFetchGifs";
import { renderHook, waitFor } from "@testing-library/react";

describe("pruebas en useFetchGifs", () => {
  test("debe de regresar el estado inicial", () => {
    const { result } = renderHook(() => useFetchGifs("hide the pain harold"));
    const { images, isLoading } = result.current;
    expect(images.length).toBe(0);
    expect(isLoading).toBe(true);
  });
  test("debe de regresar un arreglo de imagenes y el isLoading en false", async () => {
    const { result } = renderHook(() => useFetchGifs("hide the pain harold"));
    await waitFor(() => {
      expect(result.current.images.length).toBeGreaterThan(0);
      expect(result.current.isLoading).toBe(false);
    });
  });
});
