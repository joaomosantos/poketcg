export interface Card {
    id: string,
    name: string,
    imageUrl: string,
    imageUrlHiRes: string,
    types: string[],
    supertype: string,
    attacks: any[],
    resistances: any[],
    weaknesses: any[]
}