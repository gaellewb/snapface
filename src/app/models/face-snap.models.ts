// export class FaceSnapp{
//     title: string;
//     description: string;
//     imageUrl: string;
//     createdDate: Date;
//     snaps: number;

//     constructor(title: string, description: string, imageUrl: string, createdDate: Date, snaps: number) {
//         this.title = title;
//         this.description = description;
//         this.imageUrl = imageUrl;
//         this.createdDate = createdDate;
//         this.snaps = snaps;
//     }
// }

// TypeScript a simplifié cette tâche !
// TOUT CA peut être écrit directement comme ça : 
// En fait, je crée un nouveau type
export class FaceSnap{
    // constructor(
    //     public title: string, 
    //     public description: string, 
    //     public imageUrl: string, 
    //     public createdDate: Date, 
    //     public snaps: number,
    //     // je mets un ? pour dire que cette propriété est optionnelle
    //     public loccation?: string) {
    //     }

    // Je rends plus facile à lire en enlevant le constructor :
    id!: number;
    title!: string;
    description!: string;
    imageUrl!: string;
    createdDate!: Date;
    snaps!: number;
    location?: string;
}