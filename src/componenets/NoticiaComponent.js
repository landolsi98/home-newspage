import React  from "react";
import NoticiaService from "../services/NoticiaService";
import 'bootstrap/dist/css/bootstrap.min.css';
import news_photo from '../img/petite-photo2.jpeg';
import news_photo_small from '../img/photo_voiture1.jpeg';
import news_photo_small2 from '../img/petite-photo-3.jpeg'


class NoticiaComponent extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            tbl_noticias : []
        }
    }
    componentDidMount()  {
        NoticiaService.buscarTodos().then ((response) => {
            this.setState ( { tbl_noticias: response.data})
    
        })
    
    

}

render () {
    return ( 
        <div class="homepage--hero"> 
        <div class="container">
            <div class="row first"> 
              
              <div  class="col-lg-6 ">
                <br/>
                <br/>
                <div class="border border-danger border-start-0 border-bottom-0 border-5 rounded-4">
                 <p> Technical </p>
                <a className="news_title_L" id="news_big_title" href="3ers amine.html" > TECH TUESDAY: The very different Red Bull, Ferrari and Mercedes solutions to one of F1’s key performance areas.</a>
                <a href="3ers amine.html">  <img class="grande-photo1  " src={news_photo_small} alt ="*" width={630}/> </a> </div>
</div>

             
                
<div class="col-lg-6">
                  <br/>
                  <br/> 
                  {
  this.state.tbl_noticias.map(
      news =>
                  
                <div  class="row"> 
                      <div key={news.id} class="col-lg-6">
                        <br/>
                        <br/>

                       <a href="news.html" > <img class="petite-photo1"  src={news_photo} alt ="*" width={250} height={150}/> <br/> </a>
                         <p class="p2" >News</p>
                         <div> {news.titulo} </div>
                         <a id="news_small_title1" className="news_title_s"  href="d" > <br/>   <br/> </a>
                      </div> 

                      <div class="col-lg-6">
                      <br/>
                        <br/>
                     <a href="d"> <img class="petite-photo1" src={news_photo_small2} alt ="*" width={250}  height={150}/><br/></a>
                      <p class="p2" >Feature</p>
                      <div> {news.titulo} </div>
                      <a id="news_small_title2" class="news_title_s "  href="mala" > <br/>-<br/></a>
                      </div> 
                </div>
                
  )             
  }
                </div>
            



     </div>

       <div class="row" id="newsType"></div> 
       <div class="row" id="newsDetails"></div> 



     </div>





     </div>



   





         


        






    




   
        

    )
}
}
                
                          
export default NoticiaComponent;