<template>
    <div class="page container col-lg-9 col-xl-9 col-12 d-flex flex-column align-items-center justify-content-center">
        <h1>Мой опыт</h1>
        <AboutMyself @sendAbout="addAboutMyself"/>
        <Hobby @sendHobby="addHobby"/>
        <Experience @sendExperience="addExperience"/>
        <Skills @sendSkill="addSkill"/>
        <div class="btn-next-page third-btn col-12">
            <router-link to="/thirdstep" class="btn btn-primary col-sm-6 col-md-4 col-lg-3 col-xl-3">
                <span v-on:click="addMyExp(hobby, about, skill, levelskill, position, expcity, employer, monthofstart, yearofstart, monthofend, yearofend, edescr)">СЛЕДУЮЩИЙ ШАГ<i class="right"></i></span>
            </router-link>
            <router-link to="/" class="prev-href"><i class="arrow left"></i>Предыдущий шаг</router-link>
        </div>
    </div>
</template>

<script>
import { db } from '../main'
import AboutMyself from './AboutMyself.vue' 
import Hobby from './Hobby.vue' 
import Experience from './Experience.vue'
import Skills from './Skills.vue'
export default {
    name: 'SecondStep',
    components: {
      AboutMyself,
      Hobby,
      Experience,
      Skills,
    },
    data(){
        return {
        description: [],
        hobby:'',
        about:'',
        skill:'',
        levelskill:'',
        position:'',
        expcity:'',
        employer:'',
        monthofstart:'',
        yearofstart:'',
        monthofend:'',
        yearofend:'',
        edescr:'',
      }
    },
    firestore(){
        return{
            description: db.collection('description')
        }
    },
    methods:{
        addAboutMyself (data) {      // <-- новый метод
          this.about = data.about
        },
        addHobby (data) {      // <-- новый метод
          this.hobby = data.hobby
        },
        addSkill (data) {      // <-- новый метод
          this.skill = data.skill
          this.levelskill = data.levelskill
        },
        addExperience (data) {
          this.position = data.position
          this.expcity = data.expcity
          this.employer = data.employer
          this.monthofstart = data.monthofstart
          this.yearofstart = data.yearofstart
          this.monthofend = data.monthofend
          this.yearofend = data.yearofend
          this.edescr = data.edescr
          
        },
        addMyExp(hobby, about, skill, levelskill, position, expcity, employer, monthofstart, yearofstart, monthofend, yearofend, edescr){
           const createdAt = new Date()
           db.collection('description').add({ hobby, about, skill, levelskill, position, expcity, employer, monthofstart, yearofstart, monthofend, yearofend, edescr, createdAt })
        }
    }
}
</script>

<style lang="scss">
$dark-color: #687E87;
$dark-pink-color-2:#CEBCB0;
$text-color: #2c3e50;
.page{
    h1{
        padding: 4% 0 0 0;
    }
    .btn-next-page{
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 4% 0;
        .prev-href{
            padding-top: 1%;
            color: $dark-color;
            i{
                border: solid $dark-color;
                border-width: 0 2px 2px 0;
                display: inline-block;
                padding: 4px;
            }
            .left {
                transform: rotate(135deg);
                -webkit-transform: rotate(135deg);
            }
        }
        &>.btn-primary{
            background-color: $dark-pink-color-2;
            border: 1px solid #687E87;
            color: $text-color;
            padding: 3% 0;
            i{
                border: solid $text-color;
                border-width: 0 3px 3px 0;
                display: inline-block;
                padding: 4px;
                margin-left: 2%;
            }
            .right {
                transform: rotate(-45deg);
                -webkit-transform: rotate(-45deg);
            }
        }
    }
}
</style>