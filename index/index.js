let studente = {
  nome: "Giovanni",
  corsi: ["Matematica", "Fisica", "Informatica"],
};

let { corsi } = studente;

console.log(corsi);

let ifInformatica = corsi.includes("Informatica");

console.log(ifInformatica);


let veicoli = [{tipo: "auto", modelli: ["fiat", "toyota"]}, {tipo: "moto", modelli: ["ducati", "harley"]}]

let findToyota = veicoli.forEach(veicolo => {
    if (veicolo.modelli.includes("toyota")) {
        let {tipo} = veicolo
        console.log(tipo);
    }
})