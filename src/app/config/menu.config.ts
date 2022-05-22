export interface IMenu {
    name: string;
    url: string;
    subMenu?: IMenu[];
}

export const headerMenu: IMenu[] = [
    {
        name: 'Products',
        url: 'products',
        subMenu: [
            {   
                name: 'Edit PDF', 
                url: 'edit-pdf'
            },
        ]
    },
    {
        name: 'Support',
        url: 'support',
    },
    {
        name: 'Websites',
        url: 'websites',
    },
    {
        name: 'About',
        url: 'about',
    },
];

export const footerMenu: IMenu[] = [
    {
        name: 'Home',
        url: 'home',
    },
    {
        name: 'Products',
        url: 'products',
    },
    {
        name: 'Free Support',
        url: 'free-support',
    },
    {
        name: 'Free Consulting',
        url: 'free-consulting',
    },
    {
        name: 'Blog',
        url: 'blog',
    },
    {
        name: 'Websites',
        url: 'websites',
    },
    {
        name: 'About',
        url: 'about',
    }
];

