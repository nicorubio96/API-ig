const _ = require ('lodash');
const { UserCreateError, NotFound } = require('../api/errors');
const router = require('express').Router();
const models = require('../db/models');
const bcrypt = require('bcrypt');

router.get('/', async(req, res) =>{
  try{
    records = await models.User.findAll();
    res.status(200).send(records)
  }catch(e){
    res.status(400).error(e)
  }
})

router.get('/:id', async(req, res) =>{
  try{
    record = await models.User.findOne({
      where:{
        id:req.params.id
      }
    })

    if(record){
      res.status(200).send(record.toJSON());
    }else{
      res.error(new NotFound('User not found'))
    }
  }catch(e){
    res.status(400).error(e);
  }
})

router.post('/', async(req, res) =>{
  try{
    const data = _.pick(req.body,[
      'name', 'userName', 'email', 'encryptedPassword', 'biography'
    ])

    if(_.isEmpty(data)){
      return res.error(new UserCreateError("No data given"))
    }else{
      if (!data.name) {
        return res.error(new UserCreateError("Name is required"));
      } else {
        data.name = _.trim(data.name);
      }
  
      if (!data.userName) {
        return res.error(new UserCreateError("userName is required"));
      } else {
        data.userName = _.trim(data.userName);
      }
      
      if (!data.email) {
        return res.error(new UserCreateError("email is required"));
      } else {
        data.email = _.trim(data.email);
      }
      if (!data.encryptedPassword) {
        return res.error(new UserCreateError("Password is required"));
      }
      if (!data.biography) {
        return res.error(new UserCreateError("Biography is required"));
      }

      const hash = bcrypt.hashSync(data.encryptedPassword, 10);

      const record = await models.User.create({
        name: data.name,
        userName: data.userName,
        email: data.email,
        encryptedPassword:hash,
        biography: data.biography
      })
      res.status(200).json(record);
    }
  }catch(e){
    res.status(400).error(e)
  }
})

module.exports = router;