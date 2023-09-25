//escribir aqui las funciones de los controladores. Por ejemplo:

export const listProduct = (req, res) => {
  try {
    //ir a la bd y pedir los productos
    res.send("esto es un ejemplo de producto");
  } catch (error) {
    console.log(error);
  }
  // esto se prueba en postman
};
