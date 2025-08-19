const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.all("/", (req, res) => {
    const responseBody = {
        message: "Echo service received your request",
        timestamp: new Date().toISOString(),
    };

    res.setHeader("Content-Type", ["application/json", "application/json"]);

    res.status(200).json(responseBody);
});

app.listen(PORT, () => {
    console.log(`Echo service is running on port ${PORT}`);
});
