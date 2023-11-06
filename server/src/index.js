const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "../.env"),
});

// const db = require("./models");
// db.sequelize.sync({ alter: true });

const PORT = process.env.PORT || 8000;

const app = new express();

app.use(bodyParser.json());
app.use(
  cors({
    origin: [
      process.env.WHITELISTED_DOMAIN &&
        process.env.WHITELISTED_DOMAIN.split(" "),
    ],
  })
);
const authRouter = require("./routes/authRoute");
app.use("/auth", authRouter);

const eventRouter = require("./routes/eventRouter");
app.use("/event", eventRouter);

const cityRouter = require("./routes/cityRoute");
app.use("/city", cityRouter);

const ticketRouter = require("./routes/ticketRoute");
app.use("/ticket", ticketRouter);

const userRouter = require("./routes/userRoute");
app.use("/user", userRouter);

const transactionRouter = require("./routes/transactionRoute");
app.use("/transaction", transactionRouter);

const transactionDetailsRouter = require("./routes/transactionDetailsRoute");
app.use("/transactionDetails", transactionDetailsRouter);

const referralRouter = require("./routes/referralRoute");
const city = require("./models/city");
app.use("/referral", referralRouter);

const provinceRouter = require("./routes/provincesRoute")
app.use("/province", provinceRouter);

app.listen(PORT, (req, res) => {
  console.log(`Server started on port ${PORT}`);
});
