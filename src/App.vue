<script setup>
import { reactive, ref } from 'vue';


const button = reactive([
  { label:'c', value:'clear', class:'col-span-3' },
  { label:'0', value:'0', class:'col-span-1' },
  { label:'9', value:'9', class:'col-span-1' },
  { label:'8', value:'8', class:'col-span-1' },
  { label:'7', value:'7', class:'col-span-1' },
  { label:'/', value:'/', class:'col-span-1' },
  { label:'6', value:'6', class:'col-span-1' },
  { label:'5', value:'5', class:'col-span-1' },
  { label:'4', value:'4', class:'col-span-1' },
  { label:'x', value:'*', class:'col-span-1' },
  { label:'3', value:'3', class:'col-span-1' },
  { label:'2', value:'2', class:'col-span-1' },
  { label:'1', value:'1', class:'col-span-1' },
  { label:'-', value:'-', class:'col-span-1' },
  { label:'+', value:'+', class:'col-span-3' },
  { label:'=', value:'=', class:'col-span-1' },

])

const screenComponent = ref('')

const addToScreen = (value) => {
  if(value === 'clear' ) return  screenComponent.value = ''
  if(value === '=' ) return screenComponent.value = eval(screenComponent.value);
  screenComponent.value = screenComponent.value += value
}
</script>

<template>
  <div class="h-full w-full flex justify-center items-center ">
    <div class="text-white border-[.5px] h-[350px] w-[250px] rounded-lg p-4 bg-gray-800 space-y-5">
      <div class="h-[50px] bg-green-900 text-gray-50 flex justify-end items-center text-xl font-semibold  w-full rounded pr-2">{{ screenComponent }}</div>
      <div class="grid grid-cols-4 gap-2"  >
        <div v-for="button in button" :class="button.class">
          <button class="bg-gray-900 w-[50px] p-2 rounded "  @click="addToScreen(button.value)"> {{ button.label }}</button>

        </div>
      </div>
    </div>
  </div>
</template>