<template >
  <div class="container">
    <img :src="img" alt="mainWork" />
    <div class="main-work__content">
      <h2 class="work-content__title">{{workContentTitle}}</h2>
      <div class="main-work__data">
       <h3 class="work-data__text ttt">{{workDataText}}</h3>
       <h3 class="work-data__text">{{workDataTextt}}</h3>
      </div>
      <p class="work-content__text">{{workContentText}}</p>
    </div>
  </div>
</template>



<script>
export default {
  props:{
    img:{
        type:String,
    },
    workContentTitle :{
        type:String,
    },
    workDataText :{
        type:String,
    },
    workDataTextt :{
        type:String,
    },
    workContentText :{
        type:String,
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
 --dark-title:#21243D;
 --dark-text:#21243D;
}
.container {
  display:flex;
  align-items: center;
  border-bottom: 1px solid #E0E0E0;
  gap:20px
}

.main-work__content {
  display: flex;
  flex-direction:column;
  justify-content: center;
  padding-bottom: 15px;
  
}
.work-content__title {
  color: var(--dark-title);
  font-weight: 700;
  font-size: 30px;
  line-height: 44px;
}
.main-work__data {
  display: flex;
  padding: 17px 0;
  gap: 26px;
}
.work-data__text {
  color: #8695A4;
  font-size: 18px;
  font-weight: 400;
  border-radius:16px;
}
.ttt {
  color: #FFFF;
background-color: #142850;
font-weight: 900;
padding: 0 10px;
}
.work-content__text {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--dark-text);
  max-width: 594px;
}

 @media only screen and (max-width:567px) {
    .container {
      flex-direction: column;
    }
  }
</style>