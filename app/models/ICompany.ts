export interface ICompany {
    id: string,
    company: string,
    info_title: string;
    info_text: string;
    logo: string,
    website: string;
    gender: string[];
    occasion: string[];
    category: string;
    minAge: number,
    maxAge: number,
    minPrice: number,
    maxPrice: number
}