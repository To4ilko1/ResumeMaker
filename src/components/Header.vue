<template>
  <div class="container header col-12">
    <div class="header__body d-flex justify-content-center">
      <ul class="header__steps d-flex flex-sm-row justify-content-between col-12">
        <li class="header-step header-step--1 d-flex flex-row justify-content-sm-start justify-content-md-center align-items-center col-sm-4 col-md-4 col-lg-4">
          <div class="header-step__icon header-step__icon--current">
            <img src="../assets/step-icon-1.svg" width="40" height="40" alt="">
          </div>
          <div class="header-step__text text-left">Введите данные</div>
        </li>
        <li class="header-step header-step--2 d-flex flex-row justify-content-sm-start justify-content-md-center align-items-center col-sm-4 col-md-4 col-lg-4">
          <div class="header-step__icon">
            <img src="../assets/step-icon-2.svg" width="40" height="40" alt="">
          </div>
          <div class="header-step__text text-left">Расскажите о своих умениях</div>
        </li>
        <li class="header-step header-step--3 d-flex flex-row justify-content-sm-start justify-content-md-center align-items-center col-sm-4 col-md-4  col-lg-4"><!--col-sm-10-->
          <div class="header-step__icon">
            <img src="../assets/step-icon-3.svg" width="40" height="40" alt="">
          </div>
          <div class="header-step__text text-left">Выберите шаблон</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {}
};
// $('.header-step--1').click(function(){
//   $('.header-step__icon').removeClass('header-step__icon-current');
//   $(this).addClass('active');
// });
</script>

<style lang="scss">
$dark-pink-color:#BAA488;
$dark-pink-color-2:#CEBCB0;
$light-pink-color:#F9EFDE;
$blue-color:#EDF4FC;
$dark-color: #687E87;
$light-grey-color: #D3D3D3;
@media (max-width: 443px) { 
  .header{
    height:150px!important;
    .header__steps{
      flex-direction: column;
      align-items: center;
      .header-step{
        width:70%!important;
        padding:2% 0!important;
        .header-step__icon>img{
          width: 30px;
          height:30px;
        }
      }
    }
  }
}
 @media (max-width: 576px) and (min-width: 443px){
  .header{
    height:150px!important;
    .header__steps{
      flex-direction: column;
      align-items: center;
      .header-step{
        width:55%!important;
        padding:2% 0!important;
        .header-step__icon>img{
          width: 30px;
          height:30px;
        }
      }
    }
  }
}
.header {
  height: 128px;
  background-color: $dark-pink-color-2;
  .header__body{
    height:100%;
    .header__steps {
      margin:0;
      padding: 0; 
        .header-step{
          .header-step__text{
            margin-left: 1%;
          }
        }
        // .header-step--1::after,.header-step--2::after{
        //   content: "";
        //   width: 100px;
        //   height: 2px;
        //   background-color: $dark-color;
        //   color: $dark-color;
        //   margin-left:2%;
        // }
    }
  }
}
</style>
