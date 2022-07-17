// Import's
import express from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";
import mainRoutes from "./routes";

dotenv.config();

const server = express();

// Setting Mustache
server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "Views"));
server.engine("mustache", mustache());

// Static Foulder
server.use(express.static(path.join(__dirname, "../public")));

// Routes
server.use(mainRoutes);

server.use((req, res) => {
  res.render("Pages/404");
});

// Create .env and add PORT=4500
server.listen(process.env.PORT);
