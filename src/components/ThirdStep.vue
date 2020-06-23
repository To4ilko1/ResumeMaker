<template>
<div class="page">
    <h1>Выбор шаблона</h1>
    <TemplatesList/>
</div>
</template>

<script>
import TemplatesList from './TemplatesList.vue' 
import { db } from '../main'
export default {
  name: 'ThirdStep',
  components: {
    TemplatesList,
  },
  firestore () {
    return {
      summaries: db.collection('summaries')
    }
  }
}
</script>

<style lang="scss">
.page{
      h1{
        padding: 4% 0 0 0;
    }
}
</style>