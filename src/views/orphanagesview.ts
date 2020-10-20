
interface Orphanage{
    result:{
        id:number,
        name:string,
        about:string,
	    instructions:string,
	    opening_hours:string
	    open_on_weekends:boolean,
	    latitude:number,
        longitude:number,
        imageId:  number 
        URL: string,
        myorphanage:number,
    },
    OrphanageImages:[]
};
interface OrphanageList{
    id:number,
    name:string,
    about:string,
    instructions:string,
    opening_hours:string
    open_on_weekends:boolean,
    latitude:number,
    longitude:number,
    imageId:  number,
    URL: string,
    myorphanage:number
}
export default {
    renderList(Orphanage:OrphanageList){  
        return{
            id:Orphanage.id,
            name:Orphanage.name,
            about:Orphanage.about,
            instructions:Orphanage.instructions,
            opening_hours:Orphanage.opening_hours,
            open_on_weekends:Orphanage.open_on_weekends,
            latitude:Orphanage.latitude,
            longitude:Orphanage.longitude,
        }
    },
    render(Orphanage:Orphanage){
        return{
            id:Orphanage.result.id,
            name:Orphanage.result.name,
            about:Orphanage.result.about,
            instructions:Orphanage.result.instructions,
            opening_hours:Orphanage.result.opening_hours,
            open_on_weekends:Orphanage.result.open_on_weekends,
            latitude:Orphanage.result.latitude,
            longitude:Orphanage.result.longitude,
            imges: Orphanage.OrphanageImages
        }
    },
    renderMany(OrphanageList:OrphanageList[]){
        return OrphanageList.map( orpahange => this.renderList(orpahange))
    }
}