exports.listProducts = async (req, res) => {
  try {

    res.json({ message: "Hello list products." });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error!" });
  }
};

exports.readProduct = async (req, res) => {
  try {
    const { id } = req.params;

    res.json({ message: `Hello read product ${id}.` });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error!" });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { name, price } = req.body;

    console.log(name, price);

    res.json({ message: "Hello create product." });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error!" });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price } = req.body;

    console.log(name, price);

    res.json({ message: `Hello update product ${id}.` });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error!" });
  }
};

exports.removeProduct = async (req, res) => {
  try {
    const { id } = req.params;

    res.json({ message: `Hello remove product ${id}.` });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error!" });
  }
};
