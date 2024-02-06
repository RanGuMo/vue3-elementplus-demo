<template>
  <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
    <div class="shrink-0">
      <img class="h-12 w-12" src="../assets/img/404.gif" alt="ChitChat Logo" />
    </div>
    <div>
      <div class="text-xl font-medium text-black">ChitChat</div>
      <p class="text-slate-500">You have a new message!</p>
    </div>
  </div>
  <button class="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:bg-blue-800">
    Click me
  </button>

  <a href="https://xieyufei.com" class="text-red-500 visited:text-blue-800">
    https://xieyufei.com
  </a>
  <li
  class="bg-blue-200 odd:bg-blue-300 even:text-yellow-600"
  v-for="item in 10"
  :key="item"
>
  {{ item }}
</li>

</template>

<script>
export default {

}
</script>

<style lang="less" scoped></style>