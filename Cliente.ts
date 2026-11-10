
export class Cliente {

    private id: number;
    private nome: string;
    private cpf: string;
    private rg: string;
    private dtNascimento: Date;

    constructor(
        id: number,
        nome: string,
        cpf: string,
        rg: string,
        dtNascimento: Date
    ) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.rg = rg;
        this.dtNascimento = dtNascimento;
    }

    getCPF(): string {
        return this.cpf;
    }

    getNome(): string {
        return this.nome;
    }

    getRG(): string {
        return this.rg;
    }

    getDtNascimento(): Date {
        return this.dtNascimento;
    }

    getIdade(): number {
        const anoAtual = new Date().getFullYear();
        const anoNascimento = this.dtNascimento.getFullYear();

        return anoAtual - anoNascimento;
    }
}
