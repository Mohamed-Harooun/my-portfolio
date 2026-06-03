<template>
  <div class="
      certificate-card 
      flex flex-col w-[21rem] min-h-[21rem] p-1  pb-8 rounded-lg 
      bg-light 
      dark:bg-dark 
      bg-cover bg-no-repeat  mb-12 mt-12 relative
      justify-center
      items-center
      overflow-hidden
      before:absolute
      before:h-[250px]
      before:w-[180%]
      hover:before:bg-gradient-to-tl 
      hover:before:from-indigo-600 
      hover:before:to-fuchsia-600 
      hover:before:animate-rotate
      md:before:h-[90px]
      after:absolute
      after:bg-cover
      after:bg-[url('../assets/bg/light-cert-card-bg.svg')]
      dark:after:bg-[url('../assets/bg/dark-cert-card-bg.svg')]
      after:inset-1
      after:bg-no-repeat
      after:rounded-lg
      hover:scale-105 
      transition-transform duration-300 ease-in-out
      shadow-card-light
      dark:shadow-card-dark
      ">
      <div class="w-full min-h-full z-50">
        <div class="certificate-img h-3/4 relative rounded-md rounded-b-none">
          <img :src="imgSrc" class="w-full h-full rounded-md rounded-b-none" :alt="certificateName" />
          <div v-if="verified" class="certificate-link__overlay  justify-center items-center absolute z-10 top-0 left-0 bottom-0 right-0 bg-[#00000066] hidden">
            <a :href="verifyLink" target="_blank" class="text-4xl text-white cursor-pointer flex justify-center items-center rounded-full w-14 h-14 bg-gray-500 hover:scale-90 transition-transform duration-300 ease-in-out">
              <div>
                <CheckDecagram />
              </div>
            </a>
          </div>
        </div>
        <div class="certificate-description flex flex-col gap-6">
          <h4 class="certificate-name text-base text-center font-bold dark:text-slate-200  mt-4">{{ certificateName }}</h4>
          <div class="certificate-info mt-2 flex justify-between items-center mx-2">
            <span class="org text-base font-bold text-blue-800 dark:text-blue-500">{{ org }}</span>
            <span class="date text-xs font-bold text-gray-700 dark:text-gray-500">{{ date }}</span>
          </div>
        </div>
      </div>
  </div>
</template>


<script setup>
// defineProps(['imgSrc', 'certificateName', 'org', 'date', 'verified', 'verifyLink']);
defineProps({
  imgSrc: {
    type: String,
    required: true,
  },
  certificateName: {
    type: String,
    required: true,
  },
  org: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true,
  },
  verified: {
    type: Boolean,
    required: true
  },
  verifyLink: {
    type: String,
    required: false
  }
});
import CheckDecagram from 'vue-material-design-icons/CheckDecagram.vue';
</script>


<style scoped>

.certificate-img:hover .certificate-link__overlay {
  display: flex;
}

</style>