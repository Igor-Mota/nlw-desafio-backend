interface Image{
    id: number,
    url:string
}
export default {
    render(image:Image){
        return{
            id:image.id,
            url: `http://localhost:3000/uploads/${image.url}`
        }
    },
    renderMany(images: Image[]){
        return images.map( image => this.render(image))
    }
}