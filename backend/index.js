import express from "express"

const app = express()


app.get('/api/products', (req,res) =>{
    const products = [
        {
            id:1,
            name:"tablewooden",
            price:299,
            image:"https://images.woodenstreet.de/image/data/coffee-table/elevate-sheesham-wood-glass-top-coffee-table-with-storage-walnut-finish/walnut-finish/new-logo/1.jpg"
        },
        {
            id:2,
            name:"table glass",
            price:399,
            image:"https://media.istockphoto.com/id/80992924/photo/red-wine.jpg?s=612x612&w=0&k=20&c=C7-wlY_4cLQJM0KQEzdV2x4_iZIvT63tTvCThhMsi2s="
        },
        {
            id:1,
            name:"table pot",
            price:499,
            image:"https://assets.ajio.com/medias/sys_master/root/20230526/DhnL/64709885d55b7d0c631574bf/-473Wx593H-463573083-white-MODEL.jpg"
        }
    ]

    setTimeout(()=>{
        res.send(products)
    },3000)
})

const port = process.env.PORT || 3000;
app.listen(port ,() =>{
    console.log(`server running on port ${port}`);
    
})