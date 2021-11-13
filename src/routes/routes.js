const express = require("express")
const axios = require('axios')
const myrouter = express.Router()
var options = {
      method: 'GET',
      url: 'https://imdb8.p.rapidapi.com/title/find',
      params: {q: 'game of thrones'},
      headers: {
        'x-rapidapi-host': 'imdb8.p.rapidapi.com',
        'x-rapidapi-key': 'ddcc97c118msh7e179335162568dp156651jsn9133407c5cb9'
      }
    };


myrouter.get('',(req,res)=>{
      
      axios.request(options).then(function (response){
            //console.log(response.data)
            res.render('index',{data:response.data})
            
      }).catch(function (error){
            res.render('index',{data:null})
      })

})


myrouter.post('/',(req,res)=>{
      let id;
      id=req.body.search
      console.log(id)
      var options = {
            method: 'GET',
            url: 'https://imdb8.p.rapidapi.com/title/find',
            params: {q: `${id}`},
            headers: {
              'x-rapidapi-host': 'imdb8.p.rapidapi.com',
              'x-rapidapi-key': 'ddcc97c118msh7e179335162568dp156651jsn9133407c5cb9'
            }
          };
      axios.request(options).then(function (response){
            //console.log(response.data)
      res.render('index',{data:response.data})
            
      }).catch(function (error){
            res.render('index',{data:null})
      })
      
})
myrouter.get('/:id',(req,res)=>{
      let id;
      id=req.params.id
      console.log(id)
      var options = {
            method: 'GET',
            url: 'https://imdb8.p.rapidapi.com/title/get-user-reviews',
            params: {tconst: `${id}`},
            headers: {
              'x-rapidapi-host': 'imdb8.p.rapidapi.com',
              'x-rapidapi-key': 'ddcc97c118msh7e179335162568dp156651jsn9133407c5cb9'
            }
          };
      axios.request(options).then(function (response){
            //console.log(response.data)
      res.render('newpage',{page:response.data})
            
      }).catch(function (error){
            res.render('newpage',{page:null})
      })
      
})


module.exports= myrouter