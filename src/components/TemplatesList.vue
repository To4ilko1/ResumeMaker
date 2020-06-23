<template>
    <div class="templates container col-sm-12 col-md-12 col-lg-9 pt-4">
        <ul class="templates__list d-flex flex-row justify-content-around col-12">
            <li class="templates__item col-6">
                <h2 class="templates__name">Стандартный</h2>
                <div  class="templates__wrapper" >
                    <iframe class="col-12 px-0" src="https://drive.google.com/uc?export=view&id=1vGJGTlBgWBkr2R1Dh9DW-d6JCdOJeec5"></iframe>
                </div>
                <div class="templates__download-btn">
                    <button v-on:click='addTemplate'>Download PDF</button>
                </div>
            </li>
            <li class="templates__item col-6">
                <h2 class="templates__name">Люкс</h2>
                <div class="templates__wrapper">
                    <iframe class="col-12 px-0" src="https://drive.google.com/uc?export=view&id=1vGJGTlBgWBkr2R1Dh9DW-d6JCdOJeec5" frameborder="no"></iframe>
                </div>
                <div class="templates__download-btn">
                    <button v-on:click='addTemplate'>Download PDF</button>
                </div>
            </li> 
        </ul>
        <article v-for="(summary, idx) in summaries" :key="idx">
            <h1>{{ summary.name }}</h1>
        </article>
        <div class="firsttemplate" ref="content">
            <h2>{{name}} {{surname}}</h2>
            <p>Obo mne, {{name}}</p>
            <div class="columns">
                <div class="first-column" style="background-color: red; width:50%;">
                    <h2 id="heading">Lichnye dannye</h2>
                    <p>Address</p>
                    <p>Pervomaiskii</p>
                    <p>Email</p>
                    <p>ivanivanov@mail.ru</p>
                    <p>DateOfBirth</p>
                    <p>11/10/99</p>
                    <p>Placeofbirth</p>
                    <p>Irkutsk</p>
                    <p>Sex</p>
                    <p>Female</p>
                    <p>Voditelskie prava</p>
                    <p>Est'</p>
                    <h2>Interesy</h2>
                    <p>Peshii turism</p>
                    <p>Vushivanie</p>
                </div>
                <div class="second-column" style="width:50%;">
                    <p>Text about yourself</p>
                    <h2>Experience</h2>
                    <p>xperience</p>
                    <p>xperiencel</p>
                    <h2>Skills</h2>
                    <p>skill</p>
                    <p>level</p>
                </div>
         </div>
        </div>
        <div class="btn-next-page third-btn col-12">
            <router-link to="/secondstep" class="prev-href"><i class="arrow left"></i>Предыдущий шаг</router-link>
        </div>
    </div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.min.js"></script>
<script>
import { db } from '../main'
export default {
    name: "TempatesList",
    props: {},
    firestore (){
        return {
            summaries: db.collection('summaries')
        }
    },
    data(){
        return{
            name:'Liza',
            surname: 'Tochilova',
            // name:'',
            // surname:'',
            // email:'',
            // phone:'',
            // postcode:'',
            // sex:'',
            // placeofbirth:'',
            // address:'',
            // city:'',
            // dateofbirth:'',
            // hobby:'',
            // about:'',
            // skill:'',
            // levelskill:'',
            // position:'',
            // expcity:'',
            // employer:'',
            // monthofstart:'',
            // yearofstart:'',
            // monthofend:'',
            // yearofend:'',
            // edescr:'',
        }
    },
    methods:{
        // download2(){
        //     var wkhtmltopdf = require('wkhtmltopdf');
        //     var fs = require("fs");

        //     wkhtmltopdf(fs.readFileSync("index.html", "utf8"), {
        //         output: 'demo.pdf',
        //         pageSize: 'letter'
        //     });
        // }

        // download(){
        //     var wkhtmltopdf = require('wkhtmltopdf');
        //      wkhtmltopdf('<h1>Test</h1><p>Hello world</p>').pipe(res);
        //      wkhtmltopdf('http://apple.com/', { output: 'out.pdf' });
        //     var doc = new jsPDF()
        //     var h2 = document.querySelector('#heading')
        //     const html = this.$refs.content.innerHTML
        //     doc.fromHTML(html,15,15,{
        //         width:150
        //     })
        //     doc.save("output.pdf")
        // },
        addTemplate(){
            var doc = new jsPDF()
            var h2 = document.querySelector('#heading')
            const html = this.$refs.content.innerHTML
            doc.fromHTML(html,15,15,{
                width:150
            })
            doc.save("resume.pdf")
        }
    }
}
</script>

<style lang="scss">
.firsttemplate{
    display: none;
}
.templates__list{
    &>li{
        list-style-type: none;
    }
    .templates__wrapper{
    height: 500px;
    &>iframe{
        height: 100%;
    }
}
}
</style>
