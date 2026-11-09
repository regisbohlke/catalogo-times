import express from "express"

const app = express()
const PORT = 3000;

const times = [
    {
        id: 1,
        nome: "Grêmio",
        estadio: "Arena",
        cidade: "Porto Alegre"
    },
    {
        id: 2,
        nome: "Internacional",
        estadio: "Beira-Rio",
        cidade: "Porto Alegre"
    },
    {
        id: 3,
        nome: "Juventude",
        estadio: "Alfredo Jaconi",
        cidade: "Caxias do Sul"
    },
    {
        id: 4,
        nome: "Caxias",
        estadio: "Centenário",
        cidade: "Caxias do Sul"
    },

  
];

// Configura o EJS como motor de views
app.set("view engine", "ejs");
// pasta onde ficam os arquivos .ejs
app.set("views", "./views");


app.get("/", (req, res)=>{

    res.render("index")

})

app.get("/times", (req, res)=>{

  

    res.render("times", { times});



})

app.get("/times/:id", (req, res) => {

    const id = Number(req.params.id);
    const time = times.find(b => b.id === id);

    if (time) {
        res.render("detalhe", { time });
    } else {
        res.send("Time não encontrado");
    }

});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});