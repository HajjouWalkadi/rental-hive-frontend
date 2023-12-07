export interface Equipment {
    id?: number;
    name?: string;
    quantite?: number;
    cout_Location?:number;
}

export class CEquipment implements Equipment {
    constructor(
        public id?: number,
        public name?: string,
        public quantite?: number,
        public cout_Location?:number,
    ){}
}
