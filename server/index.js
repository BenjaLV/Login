import app from "./app.js";
import { connectDB } from "./db.js";

connectDB();
const PORT = 5001;
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
