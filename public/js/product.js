const form = document.getElementById("productForm");

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  const productName =
    document.getElementById("product").value;

  try {

    const response = await axios.post(
      "/api/products",
      {
        productName,
      }
    );

    console.log(response.data);

  } catch (error) {

    console.log(error);

  }

});