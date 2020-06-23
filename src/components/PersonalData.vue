<template>
    <div class="card-form card-form_personal-data d-flex flex-column p-4">
        <h2 class="p-3">Личные данные</h2>
        <form class="card-form__columns col-12 d-flex flex-row align-items-center justify-content-between flex-wrap">
            <div class="card-form__column d-flex flex-column align-items-start col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                <div class="img-wrapper px-0 my-4 d-flex justify-content-center col-12">
                    <img src="../assets/user.svg"  width="200" height="200" alt="..." class="img-thumbnail">
                </div>
                <div class="form-group">
                    <input type="file" class="form-control-file ml-3" id="exampleFormControlFile1" >
                </div>
                <div class="d-flex justify-content-between align-items-center my-3 col-12">
                    <label class="mr-2" for="InputAddress">Адрес</label>
                    <input v-model="address" type="text" class="form-control col-8" id="InputAddress"/>
                </div>
                <div class="d-flex justify-content-between align-items-center my-3 col-12">
                    <label class="mr-2" for="InputCity">Город</label>
                    <input v-model="city" type="text" class="form-control col-8" id="InputCity"/>
                </div>
                <div class="d-flex justify-content-between align-items-center my-3 col-12">
                    <label class="mr-2" for="InputBirthday">Дата рождения</label>
                    <input v-model="dateofbirth" type="text" class="form-control col-8" id="InputBirthday"/>
                </div>
            </div>
            <div class="card-form__column d-flex flex-column align-items-start col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div class="d-flex justify-content-between align-items-center form-group my-3 col-12">
                    <label class="mr-2" for="InputName">Имя<sup>*</sup></label>
                    <input v-model="name" type="text" class="form-control col-8" id="InputName"/>
                </div>
                <div class="d-flex justify-content-between align-items-center form-group my-3 col-12">
                    <label class="mr-2" for="InputSurname">Фамилия<sup>*</sup></label>
                    <input v-model="surname" type="text" class="form-control col-8" id="InputSurname"/>
                </div>
                <div class="d-flex justify-content-between align-items-center form-group my-3 col-12">
                    <label class="mr-2" for="InputEmail">E-mail<sup>*</sup></label>
                    <input v-model="email" type="email" class="form-control col-8" id="InputEmail"/>
                </div>
                <div class="d-flex justify-content-between align-items-center form-group my-3 col-12">
                    <label class="mr-2" for="InputPhone">Телефон</label>
                    <input v-model="phone" type="tel" class="form-control col-8" id="InputPhone"/>
                </div>
                <div class="d-flex justify-content-between align-items-center form-group my-3 col-12">
                    <label class="mr-2" for="InputMailIndex">Почтовый индекс</label>
                    <input v-model="postcode" type="text" class="form-control col-8" id="InputMailIndex"/>
                </div>
                <div class="d-flex justify-content-between align-items-center form-group my-3 col-12">
                    <label class="mr-2" for="Sex">Пол</label>
                    <select v-model="sex" class="custom-select col-8" id="Sex" required>
                        <option selected>Выбрать</option>
                        <option value="1">Мужской</option>
                        <option value="2">Женский</option>
                    </select>
                </div>
                <div class="d-flex justify-content-between align-items-center form-group my-3 col-12">
                    <label class="mr-2" for="InputPlaceOfBirth">Место рождения</label>
                    <input v-model="placeofbirth" type="text" class="form-control col-8" id="InputPlaceOfBirth"/>
                </div>
            </div>
        </form>
        <div class="card-form__footer-personal-data col-12">
            <div class="form-group form-check">
                <input v-on:click="sendPersonalData" type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Согласие на обработку персональных данных</label>
            </div>
        </div>
</div>
</template>

<script>
export default {
  name: "PersonalData",
  props: {},
    data(){
        return {
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
    methods: {
        sendPersonalData(){
            this.$emit('sendPersonalData', {
                name: this.name,
                surname: this.surname,
                email: this.email,
                phone: this.phone,
                postcode: this.postcode,
                sex: this.sex,
                placeofbirth: this.placeofbirth,
                address: this.address,
                city: this.city,
                dateofbirth: this.dateofbirth,
            })
        }
    }
};
</script>

<style lang="scss">
@media (max-width: 576px) { 
    .card-form>form{
        padding:0;
    }
    .card-form__column{
        padding:0;
    }
 }

.card-form_personal-data{
    margin-bottom:0!important;
    .card-form__column{
        label{
            text-align: left;
        }
    }
}
</style>
