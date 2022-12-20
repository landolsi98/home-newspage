import React from 'react';
import  Axios from 'axios';
import NoticiaService from '../services/NoticiaService';
import { useState } from 'react';


function PostForm() {
    const USERS_REST_API_URL = 'http://localhost:8080/news/all';

    const [data, setData] = useState ({
       titulo:" ",
       texto:" ",
       imagen:" ",
   
    } ) 

     function submit(e) {
e.preventDefault();
Axios.post(USERS_REST_API_URL, {
    titulo: data.titulo,
    texto:data.texto,
    imagen:data.imagen
})
.then(res=>{
    console.log(res.data)
}
    )
     }

    function handle(e) {
       const newdata = {...data}
       newdata[e.target.id] = e.target.value
       setData(newdata)
       console.log(newdata)
    }
 

 return ( 
<div>

<div class="container">
    <h2 class="text-secondary border border-success border-top-0 border-left-0 border-right-0"> Add News</h2>
    <form onSubmit={(e)=> submit(e)}>
    <div class="mb-3">
        <label for="titulo" class="form-label">Title</label>
        <input onChange={(e) => handle (e)} id="title" value={data.titulo}  type="text" class="form-control"  name="titulo"
            placeholder="Write the title of the news" required="required" />
    </div>
    <div class="mb-3">
        <label for="texto" class="form-label">Text</label>
        <input onChange={(e) => handle (e)} id="text" value={data.texto}  type="textarea" class="form-control"  name="titulo"
            placeholder="Write the text of the news" required="required" />
    </div>

    <div class="mb-3">
        <label for="file" class="col-sm-2 col-form-label">Image</label>
        <div class="col-sm-6">
            <input onChange={(e) => handle(e) } type="file" id="file" name="file" class="form-control" />
        </div>

        <button type="submit" class="btn btn-dark">Save</button>
        <input type="hidden" />
        <br/>
        <a class="btn btn-danger" role="button" href="/">Back to homepage</a>

    </div>
    </form>
</div>


<hr/>

</div>
 
 )
}
export default PostForm;