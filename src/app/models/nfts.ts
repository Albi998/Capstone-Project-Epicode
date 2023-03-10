export interface Nft {
    dna: any;
    tokenId: number;
    creator: string;
    name: string;
    description: string;
    image: any;
    id: any;
    supply: number;
    edition: number;
    price: number;
    userId: any;
    royalties: [
        {
            numerator: number;
            fallbackFee: number;
        }
    ];
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
