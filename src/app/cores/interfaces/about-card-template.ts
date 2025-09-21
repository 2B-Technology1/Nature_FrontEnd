export interface VectorItem {
    dir: string;
    vectorSrc: string;
}

export interface AboutCardTemplate {
    id: number;
    title?: string;
    gif: string;
    vectors: VectorItem[];
    logoSrc: string;
    content: {
        title: string;
        body: string;
    };
}
