import React from "react";
import icon from '../img/F1-icon2.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../decor/navBar.css'
import '../decor/news.css'


function Home () {
    
        return ( 

        
        <div  className='nav'>
             {/*<!--navbar--->*/}
          <div class="container-fluid m-0 p-0">
   
    <div>
        <nav id="back" class="navbar navbar-expand-lg bg-red">
            <div class="container-fluid">
            <img src={icon} alt='la maison jungle' className='lmj-logo'/>
                
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
            </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                             <a class="nav-link active" aria-current="page" id="news" href="unews/see" >Latest News</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" id="teams" href="unews/texo">Teams</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link active " id="schedule" href="unews/see" > Schedule</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active " id="votes" href="unews/see">Votes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active " id="add" href="/test">Add news</a>
                        </li>
                    </ul>
                    <form class="btn-login" role="button">
                           <a class="btn btn-dark" href="#button" id="signIn" role="button">LOGIN</a>
                           <a class="btn btn-light" href="#register" id="register" role="button">REGISTER</a>
                    </form>
                </div>
            </div>
        </nav>
    </div>

</div>
       
      </div>


        );
    }


export default Home;