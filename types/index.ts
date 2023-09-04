export interface Project {
    acf:            Acf;
}

export interface Acf {
    title:         string;
    isFeatured:    boolean;
    tools:         string[];
    color:         string;
    images:        Image[];
    prefix:        string;
    slug:          string;
    year:          string;
    liveurl:       string;
    giturl:        string;
    description:   Description;
    type:          AcfType;
    catagory:      Catagory;
    arrowcolor:    Arrowcolor;
    ischallenge:   boolean;
    createdat:     string;
    challengeurl?: string;
}

export enum Arrowcolor {
    Black = "black",
    White = "white",
}

export enum Catagory {
    Frontend = "frontend",
    Fullstack = "fullstack",
}

export interface Description {
    da: string;
    en: string;
}

export enum Image {
    The1PNG = "-1.png",
    The2PNG = "-2.png",
    The3PNG = "-3.png",
    The4PNG = "-4.png",
    The5PNG = "-5.png",
    The6PNG = "-6.png",
}

export enum AcfType {
    DesignDevelopment = "design & development",
    Development = "development",
}
