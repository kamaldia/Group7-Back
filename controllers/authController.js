import Admin from "../models/adminModel.js";
export const loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ where: { username } });

    if (!admin) {
      return res.status(404).json({ error: "Admin not found" });
    }
    const match = bcrypt.compare(password, admin.password);

    if (match) {
      res.status(200).json({ status: "ok", data: admin });
    } else {
      res.status(401).json({ error: "Incorrect password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve the admin" });
  }
};