<template>
    <main class="container">
     
      <div class="main-post__boxs">
        <div class="main-post__box">
          <h3 class="post-box__title">{{postBoxTitle}}</h3>
          <div class="post-box-data">
            <h3 class="box-data-text" id="text1">{{boxDataText}}</h3>
            <h3 class="box-data-text">{{boxDataTextt}}</h3>
          </div> 
          <p class="post-box__text">{{postBoxText}}</p>
        </div>
      </div>
    </main>
    
</template>


<script>
export default {
      props: {
          postBoxTitle:{
            type: String
          },
          boxDataText: {
            type: String
          },
          boxDataTextt: {
            type: String
          },
          postBoxText: {
            type: String
          },

      },

  data() {
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
    background-color: #EDF7FA;
  }
  .main-post__boxs {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 22px 0 32px 0;
  }

  .post-box-data {
    display: flex;
    align-items: center;
    padding-bottom: 15px;
  }

  .main-post__box {
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(187, 225, 250, 0.25);
    border-radius: 4px;
  }

  .main-post__title {
    color: var(--text-color);
    font-size: 22px;
    line-height: 60px;
    font-weight: 400;
  }

  .main-post__text {
    color: #00A8CC;
    font-size: 16px;
    line-height: 24px;
    text-align: right;
  }

  .post-box__title {
    font-size: 26px;
    font-weight: 700;
    line-height: 38px;
    max-width: 374px;
    color: var(--title-color);
    padding: 23px;
  }
  .post-box__text {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: var(--text-color);
    max-width: 368px;
    margin: 0 23px 23px 23px;
  }

  .box-data-text{
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    padding: 0 23px;
    color: var(--text-color);
  }
  #text1 {
    border-right: 1px solid #000;
  }


</style>