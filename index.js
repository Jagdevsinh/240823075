const express = require("express");
const studentRoute = require("./routes/studentRoute"); 

const app = express(); 
const PORT = 80;

app.use(express.json());

app.use("/student", studentRoute);

app.get("/" , (req, res) => {
    res.send("hello how are you")
})

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}/`);
});
