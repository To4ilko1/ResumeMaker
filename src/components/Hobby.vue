<template>
    <div class="card-form col-10 d-flex flex-column flex-nowrap px-4 py-3 mb-0">
        <div class="card-form__header col-12 d-flex flex-row py-1">
            <img class="mr-3" src="../assets/artist.svg" width="30" height="30" alt="">
            <h2 class="text-left">Интересы</h2>
        </div>
        <div class="card-form__main-part d-flex flex-column align-items-start col-12">
            <label class="text-left" for="InputHobby">Хобби</label>
            <input type="text" v-model="hobby" class="form-control col-12" placeholder="Например, пеший туризм" id="InputHobby"/>
        </div>
        <div class="card-form__footer d-flex flex-row flex-wrap col-12 my-2">
            <div class="card-form__advice-btn d-flex justify-content-start col-sm-6 pr-0 pl-0">
                <button type="submit" class="btn btn-light col-sm-4 col-6"  data-toggle="modal" data-target="#HobbyModal">Советы</button>
            </div>
            <div class="card-form__delete-save-btn d-flex justify-content-end flex-row flex-nowrap col-sm-6 pr-0 pl-0">
                <button type="submit" class="btn btn-light col-md-4 mr-3">Удалить</button>
                <button v-on:click="sendHobby" class="btn btn-light col-md-4">Сохранить</button>
            </div>
        </div>
        <div class="card-form__add-btn col-12">
            <button type="submit" class="btn btn-light d-flex flex-row justify-content-center col-12"><img class="mr-1" src="../assets/add.svg" width="20" height="20" alt="">Добавить еще одно хобби</button>
        </div>
        <div class="modal fade" id="HobbyModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                <li class="mb-2">Указывайте только те хобби, которые станут преимуществом для Вашего резюме и для работы, на которую Вы хотите подать заявку. Например, "Умение танцевать моррис" вряд ли имеет отношение к IT-сфере, в отличие от "Программирования".</li>
                                <li class="mb-2">Можете смело упоминать хобби, которые рассказывают работодателю о Вашей личности, такие как спорт, фотография или путешествия.</li>
                                <li class="mb-2">Не упоминайте взрослые увлечения или хобби, которые могут испортить Ваш имидж. Например, азартные игры, политические дискуссии и т. д.</li>
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
    name: "Hobby",
    props: {},
    data(){
        return {
        hobby:'',
        }
    },
    methods: {
        sendHobby(){
            this.$emit('sendHobby', {
                hobby: this.hobby,
            })
        }
    }
};
</script>

<style lang="scss">

</style>
