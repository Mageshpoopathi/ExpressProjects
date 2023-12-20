const{Router}=require('express');
// const {query}=require('querystring');
const router=new Router();

const mobilePhones=[
    {
        OsName:'Android',
        Version:10,
        Name:'oppo'
    },
    {
        OsName:'Android',
        Version:9,
        Name:'Samsung'
    },
    {
        OsName:'Ios',
        Version:8,
        Name:'Iphone 13'
    }
]

//normal GET routes
router.get('/',(req,res)=>{
    res.send(mobilePhones);
})
//GET request with route params
router.get('/:Name',(req,res)=>{
    const{Name}=req.params;
    const device=mobilePhones.find((dev)=>dev.Name===Name);
    res.send(device);
})
//normal POST routes
router.post('/',(req,res)=>{
    console.log(req.body);
    mobilePhones.push(req.body);
    res.send(201);
})
//////////
router.get('/api/:Version',(req,res)=>{

try {
    console.log(req.params);
    const {ver}=req.params;
    const version=mobilePhones.filter((vers)=>{
      return vers.Version>=ver; 
      
    })
    res.send(version);
   
} catch (error) {
    res.send(error);
    console.log(error);
}
//    const{version}=req.query.Version;
//     const parsedVersion=parseInt(version);
//    if(parsedVersion>=0){
//        const filterVersion=mobilePhones.filter((ver)=>{return ver.Version===req.query.Version});
//         res.send(filterVersion);
//    
//    }else{
//        res.send(mobilePhones);
//    }
})


module.exports=router;