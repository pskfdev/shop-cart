exports.listUsers = async (req, res) => {
  try {
    res.json({ message: "Hello list users." });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error!" });
  }
};

exports.readUser = async (req, res) => {
  try {
    const { id } = req.params;

    res.json({ message: `Hello read User ${id}.` });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error!" });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    console.log(username, password);

    res.json({ message: "Hello create User." });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error!" });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, password } = req.body;

    console.log(username, password);

    res.json({ message: `Hello update User ${id}.` });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error!" });
  }
};

exports.removeUser = async (req, res) => {
  try {
    const { id } = req.params;

    res.json({ message: `Hello remove User ${id}.` });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error!" });
  }
};
