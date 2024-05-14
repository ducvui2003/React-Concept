export interface IProduct {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
}

type ProductState = {
    products: IProduct[];
}

type ProductAction = {
    type: string,
    product: IProduct
}