import {getGifs} from '../../src/helpers/getGifs';

describe("Pruebas en getGifs", () => {
  test("getGifs debe retornar un arreglo de gifs", async () => {
    const gifs = await getGifs('One Punch');
    expect(gifs.length).toBe(10);
  });
  test("Los valores del primer gif de hide the pain Harold deben ser correctos", async () => {
    const gifs = await getGifs('hide the pain harold');
    const {id, title, url} = gifs[0];
    expect(url).toBe('https://media0.giphy.com/media/d5Fbtoj47ROk0J9IgW/giphy-downsized-medium.gif?cid=1414507ahvdf3f2nk2q0fh9pz5g3eu4x1tqj9r80oynqix0s&rid=giphy-downsized-medium.gif&ct=g');
    expect(title).toBe('Surprise Smile GIF by Hide The Pain Harold');
    expect(id).toBe('d5Fbtoj47ROk0J9IgW');
  });
});
