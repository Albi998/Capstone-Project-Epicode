export interface Cart {
    dna: any;
    tokenId: number;
    creator: string;
    name: string;
    description: string;
    image: any;
    supply: number;
    edition: number;
    price: number;
    userId: any;
    id: any;
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

export interface Total {
    price: number;
    tax: number;
    total: number;
}
