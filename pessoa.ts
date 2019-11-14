class Pessoa{
    private nome: string;
    private idade: number;

    olaMundo(){
        return "Olá, Mundo! 2DS2";
    }
}

let p = new Pessoa();

document.getElementById("texto").textContent = p.olaMundo();