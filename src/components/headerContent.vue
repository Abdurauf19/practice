<template>
<div class="container ">
    <div class="header-content">
      <h2 class="header-content__title">{{title}}</h2>
      <p class="header-content__text">{{text}}</p>
      <a  href="../photo/resume/Abdurauf.pdf" download class="header-content__btn">{{btn}}</a>
    </div>
    <img src="../photo/headerbanner.png" alt="headear-banner" class="header-banner">
</div>
</template>


<script>
export default {

  props: {
    title :{
      type:String,
    },
    text :{
      type:String,
    },
    btn :{
      type:String,
    },
  },

  data(){
    return {
        
    }
  }
}

</script>


<style scoped>
  :root {
    --title-color:#21243D;
    --text-color:#21243D;
  }
  .container {
    display: flex;
    align-items:center;
    justify-content: space-around;
    padding: 150px 0;
  }

  .header-content__title {
    font-size: 44px;
    line-height: 60px;
    font-weight: bold;
    max-width: 506px;
    color: var(--title-color);
  }

  .header-content__text {
    font-size: 16px;
    line-height: 24px;
    color: var(--title-color);
    max-width: 497px;
    font-weight: 400;
    margin: 40px 0;
  }

  .header-content__btn {
    color: #ffff;
    background-color: #FF6464;
    font-size: 20px;
    line-height: 29px;
    font-weight: 500;
    padding: 9px 21px 17px 21px;
  }
    @media only screen and (max-width:680px) {
      .container {
      flex-direction: column-reverse;
    }

    .header-content {
      padding-top: 31px;
    }
    }

  @media only screen and (max-width:567px) {
    .container {
      flex-direction: column-reverse;
    }

    .header-content {
      padding-top: 31px;
    }
    .header-content__title {
      font-size: 29px;
    }
  }

  @media only screen and (max-width:367px) {
      .header-content {
        display: flex;
        align-items: center;
        flex-direction: column;
      }

      .header-content__title {
            text-align: center;
      }

      .header-content__text {
      text-align: center;
    }
  }

</style>