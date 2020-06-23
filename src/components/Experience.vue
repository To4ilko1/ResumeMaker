<template>
    <div class="card-form col-10 d-flex flex-column flex-nowrap px-4 py-3 mb-0">
        <div class="card-form__header col-12 d-flex flex-row py-1">
            <img class="mr-3" src="../assets/suitcase.svg" width="30" height="30" alt="">
            <h2 class="text-left">Опыт работы</h2>
        </div>
        <div class="card-form__main-part justify-content-between d-flex flex-row flex-wrap col-12 px-0">
            <div class="card-form__experience d-flex flex-column align-items-start col-5">
                <label for="InputPosition">Должность</label>
                <input type="text" v-model="position" class="form-control" placeholder = "например, менеджер по продажам" id="InputPosition" />
            </div>
            <div class="card-form__experience d-flex form-group flex-column align-items-start col-5">
                <label for="InputCity">Город</label>
                <input type="text" v-model="expcity" class="form-control" placeholder = "например, Иркутск" id="InputCity" />
            </div>
            <div class="card-form__experience d-flex form-group flex-column align-items-start col-12">
                <label for="InputEmployer">Работодатель</label>
                <input type="text" v-model="employer" class="form-control" placeholder = "например, PwC" id="InputEmployer" />
            </div>
            <div class="card-form__experience d-flex form-group flex-column align-items-start col-sm-5 col-lg-3">
                <label for="DateStartMonth">Дата начала</label>
                <select type="text" v-model="monthofstart" class="custom-select" id="DateStartMonth">
                    <option selected>Выбрать</option>
                    <option value="1">Не показывать</option>
                    <option value="2">Показывать только год</option>
                    <option value="3">Январь</option>
                    <option value="4">Февраль</option>
                    <option value="5">Март</option>
                    <option value="6">Апрель</option>
                    <option value="7">Май</option>
                    <option value="8">Июнь</option>
                    <option value="9">Июль</option>
                    <option value="10">Август</option>
                    <option value="11">Сентябрь</option>
                    <option value="12">Октябрь</option>
                    <option value="13">Ноябрь</option>
                    <option value="14">Декабрь</option>
                </select>
            </div>
            <div class="card-form__experience d-flex form-group flex-column align-items-start col-sm-5 col-lg-3">
                <label for="DateStartYear">Год</label>
                <select type="text" v-model="yearofstart" class="custom-select" id="DateStartYear">
                    <option value="1">2000</option>
                    <option value="2">2001</option>
                    <option value="3">2002</option>
                    <option value="2003">2003</option>
                    <option value="5">2004</option>
                    <option value="6">2005</option>
                    <option value="7">2006</option>
                    <option value="8">2007</option>
                    <option value="9">2008</option>
                    <option value="10">2009</option>
                    <option value="11">2010</option>
                    <option value="12">2011</option>
                    <option value="13">2012</option>
                    <option value="14">2013</option>
                    <option value="15">2014</option>
                    <option value="16">2015</option>
                    <option value="17">2016</option>
                    <option value="18">2017</option>
                    <option value="19">2018</option>
                    <option value="20">2019</option>
                    <option value="21">2020</option>
                </select>
            </div>
            <div class="card-form__experience d-flex form-group flex-column align-items-start col-sm-5 col-lg-3">
                <label for="DateEndMonth">Дата окончания</label>
                <select type="text" v-model="monthofend" class="custom-select" id="DateEndMonth">
                    <option selected>Выбрать</option>
                    <option value="1">Настоящее время</option>
                    <option value="2">Не показывать</option>
                    <option value="3">Показывать только год</option>
                    <option value="4">Январь</option>
                    <option value="5">Февраль</option>
                    <option value="6">Март</option>
                    <option value="7">Апрель</option>
                    <option value="8">Май</option>
                    <option value="9">Июнь</option>
                    <option value="10">Июль</option>
                    <option value="11">Август</option>
                    <option value="12">Сентябрь</option>
                    <option value="13">Октябрь</option>
                    <option value="14">Ноябрь</option>
                    <option value="15">Декабрь</option>
                </select>
            </div>
            <div class="card-form__experience d-flex form-group flex-column align-items-start col-sm-5 col-lg-3">
                <label for="DateEndYear">Год</label>
                <select type="text" v-model="yearofend" class="custom-select" id="DateEndYear">
                    <option value="1">2000</option>
                    <option value="2">2001</option>
                    <option value="3">2002</option>
                    <option value="4">2003</option>
                    <option value="5">2004</option>
                    <option value="6">2005</option>
                    <option value="7">2006</option>
                    <option value="8">2007</option>
                    <option value="9">2008</option>
                    <option value="10">2009</option>
                    <option value="11">2010</option>
                    <option value="12">2011</option>
                    <option value="13">2012</option>
                    <option value="14">2013</option>
                    <option value="15">2014</option>
                    <option value="16">2015</option>
                    <option value="17">2016</option>
                    <option value="18">2017</option>
                    <option value="19">2018</option>
                    <option value="20">2019</option>
                    <option value="21">2020</option>
                </select>
            </div>
            <div class="card-form__experience d-flex form-group flex-column align-items-start col-12">
                <label for="FormControlDescription">Описание</label>
                <textarea type="text" v-model="edescr" class="form-control" id="FormControlDescription" rows="3"></textarea>
            </div>
        </div>
        <div class="card-form__footer d-flex flex-row flex-wrap col-12 my-2">
            <div class="card-form__advice-btn d-flex justify-content-start col-sm-6 pr-0 pl-0">
                <button type="submit" class="btn btn-light col-sm-4 col-6"  data-toggle="modal" data-target="#ExperienceModal">Советы</button>
            </div>
            <div class="card-form__delete-save-btn d-flex justify-content-end flex-row flex-nowrap col-sm-6 pr-0 pl-0">
                <button type="submit" class="btn btn-light col-md-4 mr-3">Удалить</button>
                <button v-on:click="sendExperience" class="btn btn-light col-md-4">Сохранить</button>
            </div>
        </div>
        <div class="card-form__add-btn col-12">
            <button type="submit" class="btn btn-light btn-add-experience d-flex flex-row justify-content-center col-12"><img class="mr-1" src="../assets/add.svg" width="20" height="20" alt="">Добавить еще один опыт работы</button>
        </div>
        <div class="modal fade" id="ExperienceModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                <li class="mb-2">Используйте правильное название должности для вакансии, на которую Вы претендуете. Например, «Продавец» нужно заменить на «Менеджер по работе с клиентами».</li>
                                <li class="mb-2">Как можно более четко опишите свои задачи, обязанности и любые полученные компетенции.</li>
                                <li class="mb-2">Внимательно посмотрите, что ищет компания. Составьте свой текст с учетом потребностей компании и дополните его собственным опытом.</li>
                                <li class="mb-2">Если у Вас есть опыт работы, укажите только те задачи и обязанности, которые имеют отношение к вакансии, на которую Вы хотите подать заявку.</li>
                                <li class="mb-2">Хотите отсортировать свои пункты в хронологическом порядке? Нажмите значок шестеренки в правом верхнем углу раздела и выберите "Сортировать в хронологическом порядке".</li>
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
  name: "Experience",
  props: {},
  data(){
        return {
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
    methods: {
        sendExperience(){
            this.$emit('sendExperience', {
                position: this.position,
                expcity: this.expcity,
                employer: this.employer,
                monthofstart: this.monthofstart,
                yearofstart: this.yearofstart,
                monthofend: this.monthofend,
                yearofend: this.yearofend,
                edescr: this.edescr,
            })
        }
    }
};
</script>

<style lang="scss">

</style>
