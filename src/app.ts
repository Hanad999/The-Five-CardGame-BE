import express, { Request, Response, NextFunction } from "express";

import { getAllAbilities } from "./Controllers/abilitiesControllers";

const app = express();
app.use(express.json());

app.get("/api/abilities", getAllAbilities);

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

export default app;

