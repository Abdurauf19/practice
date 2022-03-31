<template>
  <div>
    <!-- Header nav -->
    <headerNav :links="'Works'" :links2="'Blog'" :links3="'Contact'" />
    <headerContent
      :title="' Hi, I am John,Creative Technologist'"
      :text="'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'"
      :btn="'Download Resume'"/>
    </div>
    <!-- Header content -->
     <div class="main-post-content">
        <h3 class="main-post__title">Recent posts</h3>
        <a href="#" class="main-post__text">View all</a>
      </div>  
      <!-- main works -->
    <div class="containerr">
    <div v-for="(item, i) in data" :key="i">
    <headerPost :postBoxTitle="item.postBoxTitle" :boxDataText="item.boxDataText" :boxDataTextt="item.boxDataText" :postBoxText="item.postBoxText" />
    </div>
    </div>
    <!-- Featured works -->
      <h1 class="Featured-title">Featured works</h1>
    <div class="container Featured-container">
      <div v-for="(item, i) in datas" :key="i">
          <mainWork :img="item.img" :workContentTitle="item.workContentTitle" :workDataText="item.workDataText" :workDataTextt="item.workDataTextt" :workContentText="item.workContentText"/>
      </div>
    
    </div>
    <!-- Footer  -->
      <footer class="footer">
        <div class="container">
          <foooter :footerTitle="'Copyright ©2020 All rights reserved '" />
        </div>
      </footer>

</template>

<script>
import headerNav from "../components/headerNav.vue";
import headerContent from "../components/headerContent.vue";
import headerPost from "../components/mainPosts.vue";
import mainWork from "../components/headerWork.vue";
import foooter from "../components/footer.vue"

export default {
  components: {
    headerNav,
    headerContent,
    headerPost,
    mainWork,
    foooter
  },
  data() {
    return {
    
      data: [
    {
      postBoxTitle:"Making a design system from scratch",
      boxDataText:"12 Feb 2020",
      boxDataTextt:"Design, Pattern",
      postBoxText:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",

    },
    {
      postBoxTitle:"Creating pixel perfect icons in Figma",
      boxDataText:"12 Feb 2020",
      boxDataTextt:"Design, Pattern",
      postBoxText:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",

    }
  ],

    datas: [
      {
        // img: require('../photo/workphoto1'),
        workContentTitle:"Designing Dashboards",
        workDataText:"2020",
        workDataTextt:"Dashboard",
        workContentText:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      },
      {
        // img :require('../photo/workphoto2'),
        workContentTitle:"Vibrant Portraits of 2020",
        workDataText:"2018",
        workDataTextt:"Illustration",
        workContentText:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      },
      {
        // img: require('../photo/workphoto3'),
        workContentTitle:"36 Days of Malayalam type",
        workDataText:"2018",
        workDataTextt:"Typography",
        workContentText:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      },
    ]
    }
  }
};
</script>

<style >
  body {
    font-family: var(--Font_B);
    
  }
  .Featured-title {
    font-size: 22px;
    line-height: 60px;
    color: #21243D;
    padding-top: 20px;
    padding-left: 148px;
  }
  .main-post-content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #EDF7FA;
    padding-top: 25px;
  }
  .containerr {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #EDF7FA;
    gap: 20px;
  }

  .Featured-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    padding-bottom: 100px;
  }


  @media only screen and (max-width:567px) {
    .containerr  {
      flex-direction: column;
    }
    .Featured-title {
      padding: 20px 0 30px 41px;
      line-height: 30px;
    }
  }
</style>
