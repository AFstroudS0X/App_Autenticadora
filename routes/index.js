import { Router } from "express";
const router = Router();

let ussers = [
{
  id:"1",
  name: "john",
  adress: "Aña",
  age: 85,

}

]
// post
router.post('/users/create', (req,res)=>{
  //BODY
  ussers.push(req.body)
  res.send("ok");

})

router.get('/users', (req,res)=>{
    res.status(200).json(users)
});

//PUT
//Esta aceptando una estructura de parametros
//nos pide encontrar la u es una referencia de users, find acepta un parametro como ciclo,añadiendo un alias a cada pocision
router.put('/users/update/:id',()=>{
  const user = users.find(u=>u.id === req.params.id);
  if(!user){
    res.status(404).send("El recurso no se encuentra!!!");
    return;
 }

 const updateUser = {...router.user,...req.body}

 users = users.map(u=>u.id === req.params.id ? updateUser : u);
 res.status(200).send("Usuario actualizado con exito!!");

})

//abrir postman localhost:4000/api/users //abrir otro apartado o peticion en postman y seleccionarlon en "POST" localhost:4000/api/users/create
//En body seleccionar x-www-form-uriencoded y añades llaves como id, name, adress, age
export default router;
