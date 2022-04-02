<template>
 <form @submit.prevent="handleSubmit">
   <label for="email">{{Email}}</label>
   <input v-model="email" type="text" id="email" required>
   <label for="password">{{Password}}</label>
   <input v-model="password" type="password" id="password" required>
   <div v-if="passwordError" class="error">{{passwordError}}</div>
   
   <label for="select">Role</label>
   <select id="select" v-model="role">
     <option value="Developer">Frontend Developer</option>
     <option value="Designer">Web Designer</option>
     <option value="BackDeveloper">Backend Developer</option>
   </select>

      <label for="skill">Skills</label>
      <input type="text" id="skill" v-model="tempSkill" @keyup="addSkill">
      <div v-for="skill in skills" :key="skill" class="pill">
        <span @click="deleteSkill(skill)">{{skill}}</span>
      </div>



   <div class="terms">
     <input id="Checkbox" type="checkbox" v-model="terms" required>
     <label for="Checkbox">Accept terms and conditions</label>
   </div>

   <div class="submit">
     <button>Create an Account</button>
   </div>

 </form>
</template>

<script>
export default {
  props: {
    Email: {
      type:String
    },
    Password: {
      type:String
    }
  },

  data() {
    return {
      email: '',
      password: '',
      role: '',
      terms: false,
      tempSkill: '',
      skills: [],
      passwordError: '',
    }
  },

  methods: {
    addSkill(e) {
      if (e.key === '.' && this.tempSkill)  {
        if(!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill)
        }
        this.tempSkill = ''
      }
    },

    deleteSkill(skill) {
      this.skills = this.skills.filter((item) => {
        return skill !== item
      })
    },

    handleSubmit() {
     this.passwordError = this.password.length > 5 ? '' : 'Password must be least 6 chars long '
     if (!this.passwordError) {
       console.log('Email: ', this.email);
       console.log('password: ', this.password);
       console.log('role: ', this.role);
       console.log('skill: ', this.skills);
       console.log('Terms accebted: ', this.terms);
     }
    }
  }
}
</script>

<style>
  
  form {
    max-width: 420px;
    margin: 30px auto;
    background-color: #fff;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }

  label {
    color:#aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }

  input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }

  .terms {
    display: flex;
    align-items: center;
  }
  input[type="checkbox"] {
    display: block;
    padding: 10px 6px;
    width: 16px;
    margin: 0 10px 0 0;
    top:2px
  }

  .pill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background-color: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
  }
  button {
    background-color: rgb(97, 97, 204);
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
  }
  .submit {
    text-align: center;
  }
  .error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
    background: #ff00003b;
    border-radius: 20px;
    padding: 5px;
  }

  @media only screen and (max-width:420px) {
    
  }
</style>