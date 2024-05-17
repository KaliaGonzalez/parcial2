export class Anime { 
    id: number; 
    name: string; 
    description: string; 
    Rating: number; 
    episode: number; 
    categorie: string; 
    studio: string; 
    img: string; 

    public constructor(name: string, id: number,description:string,Rating:number,episode:number,categorie:string,studio:string,img:string) {
   this.name = name;
   this.id = id;
   this.Rating= Rating; 
   this.categorie = categorie; 
   this.description = description; 
   this.episode = episode; 
   this.studio = studio; 
   this.img = img;
 }

}
