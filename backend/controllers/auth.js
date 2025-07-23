exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;

    console.log(username, password);
    
    res.status(200).json({ message: "Hello register." });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error!" });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    console.log(username, password);
    res.status(200).json({ message: "Hello login." });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error!" });
  }
};
