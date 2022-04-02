<template >
  <div>
    <header class="header ">
      <nav class="header-nav">
        <ul class="header-nav__list md:flex" >
          <li class="header-nav__item">
            <a href="#Work" class="header-nav__link">{{links}}</a>
          </li>
          <li class="header-nav__item">
            <a href="#Blog" class="header-nav__link">{{links2}}</a>
          </li>
          <li class="header-nav__item">
            <a href="#Contact" class="header-nav__link">{{links3}}</a>
          </li>
        </ul>
      </nav>
      <div v-on:click="show = !show" class="header-hamburger">
        <div class="hamburger-line"></div>
        <div class="hamburger-line"></div>
        <div class="hamburger-line"></div>
      </div>
      <nav v-if="show" class="side-bar">
        <ul class="nav-sideBar_list">
          <li class="nav-sideBar-item">
            <a href="#Work" class="nev-sideBar-link">{{links}}</a>
            </li>
          <li class="nav-sideBar-item">
            <a href="#Blog" class="nev-sideBar-link">{{links2}}</a>
            </li>
          <li class="nav-sideBar-item">
            <a href="#Contact" class="nev-sideBar-link">{{links3}}</a>
            </li>
        <div v-on:click="show = !show" class="nav-sideBar__close">
          <div class="sideBar-close__line" id="close-line"></div>
          <div class="sideBar-close__line"></div>
        </div>
        </ul>
      </nav>
    </header>
  </div>
</template>


<script>
export default {
  props: {
    links: {
        type:String
    },
    links2: {
        type:String
    },
    links3: {
        type:String
    },
  },

  data(){
    return {
        show:false
    }
  },

  methods: {
  
  },

}
</script>


<style >
@import "../fonts";
  :root {
    --Font_B:'Hebbo';
    --Dark:#000;
  }
 
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  a{text-decoration: none;}
  ul{list-style: none;}

  .header-nav__list {
    display: flex;
    column-gap: 33px;
    justify-content: flex-end;
    align-items: center;
    padding: 27px 60px 0 0;
  }
  

  .header-nav__link {
    font-family: var(--Font_B);
    color: var(--Dark);
    font-size: 20px;
    line-height: 28px;
    opacity: 0.6;
    transition: all .4s ease-in-out;
  }


    .header-nav__item {
      transition:all ease-in-out .4s;
    }
    .header-nav__item:hover {
      transform: translateY(-5px);
    }

  .header-nav__link:hover {
    opacity: 1;
  }
  .side-bar {
      display: none;
     }
    @media only screen and (max-width: 1400px) {
     
    } 
      
    
    @media only screen and (max-width:768px){

      .header-nav__list{
        display: none;
      }
      .side-bar{
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
        width: 100%;
        height: 100%;
        background-color: #FF6464;
        transition: all 0.4s ease-in-out;
        top: 0;
        
      }
      .header-hamburger {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 9px;
        margin: 20px 18px 0 0;
        cursor: pointer;
      }
      .nav-sideBar_list{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-self: center;
      }
      .nav-sideBar__close {
        margin-top: 31px;
        cursor: pointer;
      }
      .hamburger-line{
        width: 25px;
        height: 1.6px;
        background-color: #000;
      }
      #close-line {
        transform: rotate(45deg);
      }
      
      .sideBar-close__line{
        width: 25px;
        height: 2px;
        background-color: #000;
        transform: rotate(-45deg);
      }
      .nev-sideBar-link {
        font-size: 25px;
        color: #000;
        opacity: 0.6;
        transition: all 0.4s ease-in-out;
      }
      .nev-sideBar-link:hover {
        opacity: 1;
      }
    }
    @media only screen and (max-width:567px) {
      .header-nav__list {
        justify-content: center;
        padding: 27px 21px 0 0;
      }
      .header-nav__link {
        font-size: 15px;
      }
    }
</style>