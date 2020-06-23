<template>
    <div class="page container col-sm-12 col-md-12 col-lg-9 col-xl-9">
        <h1>Добро пожаловать в Resume Maker!</h1>
        <PersonalData @sendPersonalData="addPersonalData"/>
        <div class="btn-next-page third-btn col-12">
          <router-link to="/secondstep" class="btn btn-primary col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <span v-on:click="addMyPersonalData(name, surname, email, phone, postcode, sex, placeofbirth, address, city, dateofbirth)">СЛЕДУЮЩИЙ ШАГ<i class="right"></i></span>
          </router-link>
        </div>
    </div>
</template>

<script>
import { db } from '../main'
import PersonalData from './PersonalData.vue'
export default {
    name: 'FirstStep',
    components: {
        PersonalData,
    },
    data(){
        return{
            summaries: [],
            name:'',
            surname:'',
            email:'',
            phone:'',
            postcode:'',
            sex:'',
            placeofbirth:'',
            address:'',
            city:'',
            dateofbirth:'',
        }
    },
    firestore(){
        return{
            summaries: db.collection('summaries')
        }
    },
    methods:{
        addPersonalData (data) {
          this.name = data.name
          this.surname = data.surname
          this.email = data.email
          this.phone = data.phone
          this.postcode = data.postcode
          this.sex = data.sex
          this.placeofbirth = data.placeofbirth
          this.address = data.address
          this.city = data.city
          this.dateofbirth = data.dateofbirth
        },
        addMyPersonalData(name, surname, email, phone, postcode, sex, placeofbirth, address, city, dateofbirth) {
            const createdAt = new Date()
            db.collection("summaries").add({ name, surname, email , phone , postcode , sex , placeofbirth , address, city, dateofbirth, createdAt })
        }
    }
}
</script>

<style lang="scss">
</style>