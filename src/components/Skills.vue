<template>
    <div class="card-form col-10 d-flex flex-column flex-nowrap px-4 py-3 mb-0">
        <div class="card-form__header col-12 d-flex flex-row py-1">
            <img class="mr-3" src="../assets/mouse.svg" width="30" height="30" alt="">
            <h2 class="text-left">Навыки</h2>
        </div>
        <div class="card-form__main-part justify-content-between d-flex flex-row flex-wrap col-12 px-0">
            <div class="card-form__skill d-flex form-group flex-column align-items-start col-sm-12 col-md-12 col-lg-5">
                <label for="InputSkill">Навык</label>
                <input type="text" v-model="skill" class="form-control" placeholder = "например, Microsoft Word" id="InputSkill" />
            </div>
            <div class="card-form__skill d-flex form-group flex-column align-items-start col-sm-12 col-md-12 col-lg-5">
                <label for="Level">Уровень</label>
                <select type="text" v-model="levelskill" class="custom-select" id="Level">
                    <option selected>Выбрать</option>
                    <option value="1">Эксперт</option>
                    <option value="2">Опытный</option>
                    <option value="3">Умелый</option>
                    <option value="4">Начинающий</option>
                    <option value="5">Новичок</option>
                </select>
            </div>
        </div>
        <div class="card-form__footer d-flex flex-row flex-wrap col-12 my-2">
            <div class="card-form__advice-btn d-flex justify-content-start col-sm-6 pr-0 pl-0">
                <button type="submit" class="btn btn-light col-sm-4 col-6" data-toggle="modal" data-target="#SkillsModal">Советы</button>
            </div>
            <div class="card-form__delete-save-btn d-flex justify-content-end flex-row flex-nowrap col-sm-6 pr-0 pl-0">
                <button type="submit" class="btn btn-light col-md-4 mr-3">Удалить</button>
                <button v-on:click="sendSkill" type="submit" class="btn btn-light col-md-4">Сохранить</button>
            </div>
        </div>
        <div class="card-form__add-btn col-12">
            <button type="submit" class="btn btn-light d-flex flex-row justify-content-center col-12"><img class="mr-2" src="../assets/add.svg" width="20" height="20" alt="">Добавить еще один навык</button>
        </div>
        <div class="modal fade" id="SkillsModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                <li class="mb-2">Указывайте только те навыки, которые важны для вакансии, на которую Вы хотите подавать заявку.</li>
                                <li class="mb-2">Примеры: отличный коммуникатор, командный игрок, надежный и т. д.</li>
                                <li class="mb-2">Укажите любые ценные навыки, связанные с вакансией, такие как навыки работы с компьютером и программным обеспечением. Например: Word, Excel, Photoshop и т. д.</li>
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
    name: "Skills",
    props: {},
    data(){
        return{
            skill:'',
            levelskill:'',
        }
    },
    methods: {
        sendSkill(){
            this.$emit('sendSkill', {
                skill: this.skill,
                levelskill: this.levelskill,
            })
        }
    }
};
</script>

<style lang="scss">

</style>
