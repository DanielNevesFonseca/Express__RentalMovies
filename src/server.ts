import { AppDataSource } from "./data-source";
import app from "./app";

AppDataSource.initialize()
  .then(() => {
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
      console.log(`App is running on https://localhost:${PORT}`);
    });

    console.log("Database connected!");
  })
  .catch((err) => {
    console.log(err);
  });
