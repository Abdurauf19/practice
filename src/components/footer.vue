<template >
  <div class="container">
    <div class="img-box">
    <img src="../photo/socialMedia/fb.png" alt="socialMedia">
    <img src="../photo/socialMedia/insta.png" alt="socialMedia">
    <img src="../photo/socialMedia/Linkedin.png" alt="socialMedia">
    <img src="../photo/socialMedia/twitter.png" alt="socialMedia">
    </div>
    <h2 class="footer-title">{{footerTitle}}</h2>
  </div>
</template>



<script>
export default {
  props :{
    img: {
    type:String
    },
    footerTitle: {
    type:String
    },
  }
}
</script>



<style scoped >
  .container {
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
  }

  .footer-title {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #21243D;
    padding: 26px 0 54px 0;
    padding-bottom: 54px;
  }

  .img-box {
    display: flex;
    gap: 35px;
  }
</style>