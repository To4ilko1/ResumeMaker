<template>
    <div class="card-form col-10 d-flex flex-column flex-nowrap px-4 py-3 mb-0"><!--px-4 py-3 -->
        <div class="card-form__header col-12 d-flex flex-row py-1">
            <img class="mr-3" src="../assets/doctor.svg" width="30" height="30" alt="">
            <h2>Профиль</h2>
        </div>
        <div class="card-form__main-part col-12 d-flex flex-column align-items-start">
            <label for="FormControlTextarea">Описание</label>
            <textarea type="text" v-model="about" class="form-control" id="FormControlTextarea" rows="3"></textarea>
        </div>
        <div class="card-form__footer col-12 d-flex flex-row justify-content-between flex-wrap my-2">
            <button type="submit" class=" card-form__advice-btn btn btn-light col-sm-4 col-md-2 col-8"  data-toggle="modal" data-target="#exampleModal">Советы</button>
            <button v-on:click="sendAbout" class="btn btn-light col-sm-4 col-md-2 col-8">Сохранить</button>
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Советы</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p class="text-left">
                            <ol>
                                <li class="mb-2">Ваш профиль всегда находится в верхней части Вашего резюме.</li>
                                <li class="mb-2">Опишите себя в краткой и убедительной форме, с учетом как вакансии, так и должности. Не используйте односложные фразы, но постарайтесь быть максимально лаконичным.</li>
                                <li class="mb-2">Напишите хороший профиль, упомянув как минимум следующие моменты: достижения, качества, амбиции, цели и что Вы ищете.</li>
                            </ol>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutMyself",
    props: {},
    data(){
        return {
            about:'',
        }
    },
    methods: {
        sendAbout(){
            this.$emit('sendAbout', {
                about: this.about,
            })
        }
    }
};
</script>

<style lang="scss">
$light-grey-color: #D3D3D3;
@media (max-width: 580px){ 
    .card-form__footer{
        flex-direction: column!important;
        align-items: center!important;
        .card-form__advice-btn{
            justify-content:center!important;
            width: 100%!important;
            margin-bottom: 3%;
            &>button{
                width: 100%!important;
            }
        }
        .card-form__delete-save-btn{
            width: 100%!important;
        }
    }
}
.card-form {
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    margin: 5% 0;
    .card-form__header{
        border-bottom: 1px solid $light-grey-color;
    }
    .card-form__main-part{
        padding-top:3%;
    }
}
</style>
