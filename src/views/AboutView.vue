<template>
  <div class="About">
    <div class="flex flex-col items-center justify-center">
      <InfoCard :has-title="true" title="summary" card-padding="p-6" :use-scale="false" :use-animation="false" class="w-5/6">
        <p class="xl:text-2xl">
          Passionate and highly motivated Frontend Web Developer with +2
          Years of experience in creating user-friendly web applications. Proficient in
          HTML, CSS, JavaScript, Bootstrap, Vue.js, Nuxt.js, Vuetify Git & GitHub, and
          SASS. I am dedicated to staying up-to-date with the latest web development
          technologies and trends, constantly seeking new challenges and
          opportunities to improve my skills and deliver innovative solutions. Seeking
          to join a dynamic organization where I can use my skills.
        </p>
      </InfoCard>

      <InfoCard :has-title="true" title="Technical Skills" card-padding="p-6" :use-scale="false" :use-animation="false" class="w-5/6">
        <p class="text-sm lg:text-xl text-center mb-4 text-gray-600 dark:text-gray-400">
          <FormatQuoteOpenOutline class="text-xl lg:text-4xl text-slate-500" />
          Always learning, always coding — I stay ahead in web development trends.
          <FormatQuoteCloseOutline class="text-xl lg:text-4xl text-slate-500" />
        </p>
        <MainHeading title="Knowledge" text-size="text-2xl lg:text-4xl" class="my-10" />
        <p class="text-sm lg:text-2xl font-semibold text-gray-800 dark:text-slate-300 text-center">
          These are the essential tools, libraries, and frameworks that constitute
          my current tech stack, enabling me to develop robust and innovative applications
        </p>
        <div class="stack-icons flex justify-center gap-4 flex-wrap mt-10">
          <SkillsIcon v-for="(icon, index) in myTechStack" :key="index" :icon-name="icon.name" :icon-src="icon.src" />
        </div>
        <MainHeading title="Current Learning" text-size="text-2xl lg:text-4xl" class="my-10" />
        <div class="stack-icons flex justify-center gap-4 flex-wrap mt-10">
          <SkillsIcon 
            v-for="(icon, index) in currentLearning" 
            :key="index" 
            :icon-name="icon.name" 
            :icon-src="icon.src" 
          />
        </div>
      </InfoCard>

      <InfoCard :has-title="true" title="Work Experience" card-padding="p-6" :use-scale="false" :use-animation="false" class="w-5/6 ">
        <WorkExprienceTimeline 
          v-for="(exprience, index) in myWorkExprience" 
          :key="exprience.id" 
          :job-title="exprience.jobTitle" 
          :company-name="exprience.companyName" 
          :date="exprience.date" 
          :responsibilities="exprience.responsibilities"
          :is-last="index === myWorkExprience.length - 1"
        />
      </InfoCard>

      <AboutPageTitle title="Education & Certificates" class="mt-28" />
      <div class="flex justify-center flex-wrap w-5/6 gap-4">
        <CertificateCard 
          v-for="(cert, index) in myCertificates" 
          :key="index" 
          :certificate-name="cert.certificateName"
          :img-src="cert.imgSrc" 
          :org="cert.org" 
          :date="cert.date" 
          :verified="cert.verified"
          :verify-link="cert.verifyLink" 
        />
      </div>
      <AboutPageTitle title="General Information" class="mt-16" />
      <div class="flex justify-around items-center flex-wrap w-5/6 gap-8 mb-12 mt-12">
        <InfoCard 
          :has-title="false" 
          card-padding="p-2"
          :use-scale="true"
          :use-animation="true"
          class="w-80 !mt-0"
          animation-size=" before:w-[150px] before:h-[160%] lg:before:w-[175%] lg:before:h-[150px] md:before:h-[90px]"
          >
          <MainHeading title="Soft Skills" text-size="text-2xl lg:text-3xl" :is-uppercase="true" />
          <ul class="pl-2 my-4">
            <li v-for="(skill, index) in softSkills" :key="index" class="before:inline-block before:w-2.5 before:h-2.5 before:rounded-sm before:bg-blue-600 before:mr-2 text-lg text-gray-900 dark:text-slate-300 font-semibold leading-relaxed">{{ skill }}</li>
          </ul>
        </InfoCard>
        <div class="flex flex-col gap-8">
          <InfoCard 
            :has-title="false" 
            card-padding="p-2"
            :use-scale="true"
            :use-animation="true"
            class="w-80 !mt-0"
            animation-size="before:w-[125%] before:h-[80px]"
            >
            <MainHeading title="Age" text-size="text-2xl lg:text-3xl" :is-uppercase="true" />
            <p class="text-2xl my-4 text-center text-gray-900 dark:text-slate-300 font-semibold">{{ myAge }} years old</p>
          </InfoCard>
          <InfoCard 
            :has-title="false" 
            card-padding="p-2"
            :use-scale="true"
            :use-animation="true"
            class="w-80 !mt-0"
            animation-size="before:w-[125%] before:h-[80px]"
            >
            <MainHeading title="Languages" text-size="text-2xl lg:text-3xl" :is-uppercase="true" />
            <ul class="pl-2 my-4">
              <li v-for="(lang, index) in languages" :key="index" class="before:inline-block before:w-2.5 before:h-2.5 before:rounded-sm before:bg-blue-600 before:mr-2 text-lg leading-relaxed">
                <span class="text-xl font-semibold mr-4">{{ lang.lang }}:</span>
                <span class="font-medium">{{ lang.level }}</span>
              </li>
            </ul>
          </InfoCard>
          <InfoCard 
            :has-title="false" 
            card-padding="p-2"
            :use-scale="true"
            :use-animation="true"
            class="w-80 !mt-0"
            animation-size="before:w-[125%] before:h-[80px]"

            >
            <MainHeading title="Military Status" text-size="text-2xl lg:text-3xl" :is-uppercase="true" />
            <p class="text-2xl my-4 text-center font-bold text-green-600 dark:text-green-500">Exemption</p>
          </InfoCard>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { computed } from 'vue';
import { useAgeCalculator } from '../composables/calcAge';

/** Start importing components and matrial icons */
import InfoCard from '../components/InfoCard.vue';
import MainHeading from '../components/MainHeading.vue';
import SkillsIcon from '../components/SkillsIcon.vue';
import AboutPageTitle from '../components/AboutPageTitle.vue';
import FormatQuoteOpenOutline from "vue-material-design-icons/FormatQuoteOpenOutline.vue";
import FormatQuoteCloseOutline from "vue-material-design-icons/FormatQuoteCloseOutline.vue";
import WorkExprienceTimeline from '../components/WorkExprienceTimeline.vue';
/** End importing components and matrial icons */

/** Start importing skills icons */

import html5 from '../assets/tech-icons/html5.svg';
import css3 from '../assets/tech-icons/css3.svg';
import javaScript from '../assets/tech-icons/javascript-original.svg';
import sass from '../assets/tech-icons/sass-original.svg';
import bootstrap from '../assets/tech-icons/bootstrap-original.svg';
import tailwindcss from '../assets/tech-icons/tailwindcss-plain.svg'
import reactjs from '../assets/tech-icons/react-original.svg';
import vuejs from '../assets/tech-icons/vuejs-original.svg';
import vuetifyjs from '../assets/tech-icons/vuetify-original.svg';
import pinia from '../assets/tech-icons/pinia-original.svg';
import git from '../assets/tech-icons/git.svg';
import github from '../assets/tech-icons/github-dark.svg';
import firebase from '../assets/tech-icons/firebase.svg';
import npm from '../assets/tech-icons/npm.svg';
import webpack from '../assets/tech-icons/webpack.svg';
import vite from '../assets/tech-icons/vitejs.svg';
import chatGPT from '../assets/tech-icons/chatgpt.svg';
import nuxt from '../assets/tech-icons/nuxtjs.svg';
import php from '../assets/tech-icons/php.svg';
import mysql from '../assets/tech-icons/mysql.svg';
import laravel from '../assets/tech-icons/laravel.svg';
import CertificateCard from '../components/CertificateCard.vue';
/** End importing skills icons */

/** Start importing Certificate images */
import commingSoonImg from '../assets/certificates/img-comming-soon.jpg';
import frontendCertificate from '../assets/certificates/Frontend-Web-Development.jpg';
import reactCertificate from '../assets/certificates/React-Development.jpg'
/** End importing Certificate images */


const myTechStack = [
  { name: 'HTML5', src: html5 },
  { name: 'CSS3', src: css3 },
  { name: 'JavaScript', src: javaScript },
  { name: 'SASS', src: sass },
  { name: 'Bootstrap', src: bootstrap },
  { name: 'Tailwindcss', src: tailwindcss },
  { name: 'React.js', src: reactjs },
  { name: 'Vue.js', src: vuejs },
  { name: 'Nuxt', src: nuxt },
  { name: 'Vuetify.js', src: vuetifyjs },
  { name: 'Pinia', src: pinia },
  { name: 'git', src: git },
  { name: 'github', src: github },
  { name: 'Firebase', src: firebase },
  { name: 'npm', src: npm },
  { name: 'Webpack', src: webpack },
  { name: 'Vite', src: vite },
  { name: 'chatGPT', src: chatGPT }
]

const currentLearning = [
  { name: 'PHP', src: php },
  { name: 'MySQL', src: mysql },
  { name: 'Laravel', src: laravel }
]

const myWorkExprience = [
  {
    jobTitle: 'Frontend Developer | Vue.js/Nuxt.js',
    companyName: 'Albaz Globe Ltd',
    date: 'Oct, 2025',
    responsibilities: [
      'Led frontend development of Ako Sayara, a scalable car marketplace built with Next.js, focusing on modular architecture and performance.',
      'Implemented real-time chat (SignalR) and an AI-powered assistant to enhance user engagement and support.',
      'Delivered a fully localized platform (AR/EN/KU) with advanced RTL support and optimized state management.',
    ]
  },
  {
    jobTitle: 'Frontend Developer | Vue.js/Nuxt.js',
    companyName: 'Awammer Alshabaka - AAIT',
    date: 'Sep, 2024',
    responsibilities: [
      'Developed responsive web applications using Nuxt 3, Pinia, and PrimeVue',
      'Collaborated with backend developers to integrate RESTful APIs',
      'Using vee-validate for form validation',
      'Working on multi-Role Authentication Systems',
      'Working on social media platform with two roles (Individual and Company)',
      'Working on a Provider Dashboard for Education Platform with 4 different roles (Teacher, Platform, Facility, Follow-up Teacher)',
    ]
  },
  {
    jobTitle: 'Junior Frontend Developer | Vue.js/Nuxt.js',
    companyName: 'Elryad for Web Design',
    date: 'Jan, 2024',
    responsibilities: [
      'Developed responsive web applications using Vue.js, Nuxt.js, and Vuetify',
      'Collaborated with backend developers to integrate RESTful APIs',
      'Utilized Git for version control and collaborated on GitHub',
      'Implemented state management using Pinia and Vuex'
    ]
  }
]

const myCertificates = [
  { certificateName: 'Bachelor’s degree, Business/Commerce, General', imgSrc: commingSoonImg, org: 'Zagazig University', date: '2019 - 2023 (graduated)', verified: false, verifyLink: '' },
  { certificateName: 'Frontend Web Development Professional Certificate', imgSrc: frontendCertificate, org: 'Udacity', date: 'August 23, 2021', verified: true, verifyLink: 'https://confirm.udacity.com/TLDCNP4E' },
  { certificateName: 'React Development Cross-Skilling Certificate', imgSrc: reactCertificate, org: 'Udacity', date: 'September 03, 2022', verified: true, verifyLink: 'https://confirm.udacity.com/SAZD2DH3' },
]

const softSkills = [
  "Clear Team Communication",
  "Creative Problem Solver",
  "Effective Time Management",
  "Tech Adaptability",
  "Precise UI Attention",
  "Collaborative Team Player",
  "User-Centric Creativity",
  "Empathetic UX Understanding",
  "Analytical Critical Thinker",
]

const languages = [
  { lang: 'Arabic', level: 'Native' },
  { lang: 'English', level: 'Intermediate' },
]

const myAge = computed(() => useAgeCalculator('2001-01-17').age);

</script>

<style scoped></style>