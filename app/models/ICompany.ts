export interface ICompany {
    id: string,
    company: string,
    info_title: string;
    info_text: string;
    all_text?: string;
    logo: string,
    image?: string;
    website: string;
    gender: string[];
    occasion: string[];
    category: string;
    sub_category: string[];
    minAge: number,
    maxAge: number,
    minPrice: number,
    maxPrice: number,
    related_companyId?: string
}