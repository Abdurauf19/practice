<template >
  <div>
    <header class="header ">
      <nav class="header-nav">
        <ul class="header-nav__list md:flex" >
          <li class="header-nav__item">
            <a href="#Nav" class="header-nav__link">{{links}}</a>
          </li>
          <li class="header-nav__item">
            <a href="#Nav" class="header-nav__link">{{links2}}</a>
          </li>
          <li class="header-nav__item">
            <a href="#Nav" class="header-nav__link">{{links3}}</a>
          </li>
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
        
    }
  }
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