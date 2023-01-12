export interface Nft {
    dna: any;
    creator: string;
    name: string;
    description: string;
    image: any;
    supply: number;
    edition: number;
    royalties: {
        numerator: number;
        fallbackFee: number;
    };
attributes: [
    {
        trait_type: string;
        value: string;
    },
    {
        trait_type: string;
        value: string;
    },
    {
        trait_type: string;
        value: string;
    },
    {
        trait_type: string;
        value: string;
    },
    {
        trait_type: string;
        value: string;
    },
]

}
