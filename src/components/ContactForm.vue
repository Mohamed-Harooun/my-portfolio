<template>
  <div>
    <AlertMessage v-if="successAlert" @close-alert="closeSuccessAlert" alert-type="success" alert-message="Your message sent successfully, I will reply ASAP." />
    <AlertMessage v-if="errorAlert" @close-alert="closeErrorAlert" alert-type="error" alert-message="Failed to send message, try again later." />
    <form @submit.prevent="sendMessage" ref="contactForm">
      <div class="flex flex-col gap-4">
        <div
          class="name-field flex flex-col bg-gray-600 bg-opacity-50 p-2 rounded-lg shadow-card-light dark:shadow-card-dark">
          <label for="name" class="text-slate-900 dark:text-slate-300">
            Name
            <Asterisk class="text-xs text-red-600" />
          </label>
          <input name="client_name" type="text" id="name" required class="bg-gray-600 bg-opacity-0 py-1 text-black dark:text-slate-100 text-lg outline-none" />
        </div>
        <div
          class="email-field flex flex-col bg-gray-600 bg-opacity-50 p-2 rounded-lg shadow-card-light dark:shadow-card-dark">
          <label for="email" class="text-slate-900 dark:text-slate-300">
            Email
            <Asterisk class="text-xs text-red-600" />
          </label>
          <input name="client_email" type="email" id="email" required class="bg-gray-600 bg-opacity-0 py-1 text-black dark:text-slate-100 text-lg outline-none" />
        </div>
        <div
          class="project-field flex flex-col bg-gray-600 bg-opacity-50 p-2 rounded-lg shadow-card-light dark:shadow-card-dark">
          <label for="project" class="text-slate-900 dark:text-slate-300">
            Project
            <Asterisk class="text-xs text-red-600" />
          </label>
          <input name="client_project" type="text" id="project" required class="bg-gray-600 bg-opacity-0 py-1 text-black dark:text-slate-100 text-lg outline-none" />
        </div>
        <div class="message-field flex flex-col bg-gray-600 bg-opacity-50 p-2 rounded-lg shadow-card-light dark:shadow-card-dark">
          <label for="message" class="text-slate-900 dark:text-slate-300">
            Message
            <Asterisk class="text-xs text-red-600" />
          </label>
          <textarea name="client_message" id="message" required cols="30" rows="3"
            class="bg-gray-600 bg-opacity-0 py-1 text-black dark:text-slate-100 text-lg outline-none" />
        </div>
        <div class="send-message__btn">
          <button type="submit" class="flex gap-1 justify-center items-center bg-blue-600 hover:bg-blue-700 text-white text-lg transition-colors duration-300 ease-in-out px-4 py-2 rounded-lg">
            <span>Send Message</span>
            <Send class="text-2xl" />
          </button>
        </div>
      </div>

    </form>
  </div>
</template>


<script setup>
import Asterisk from 'vue-material-design-icons/Asterisk.vue';
import Send from 'vue-material-design-icons/Send.vue';

import AlertMessage from './AlertMessage.vue';

import { ref } from 'vue';
import emailjs from '@emailjs/browser';


const successAlert = ref(false);
const errorAlert = ref(false);

const closeSuccessAlert = () => successAlert.value = false;
const closeErrorAlert = () => errorAlert.value = false;



const contactForm = ref(null);

const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

const sendMessage = async () => {

  emailjs.sendForm(emailjsServiceId, emailjsTemplateId, contactForm.value, emailjsPublicKey)
  .then((result) => {
    console.log('Message sent successfully: ', result.text);
    successAlert.value = true;
  })
  .catch((error) => {
    console.log('Failed: ', error);
    errorAlert.value = true;
  })
};
</script>


<style scoped>

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-background-clip: text;
  /* -webkit-text-fill-color: #ffffff; */
  transition: background-color 5000s ease-in-out 0s;
  box-shadow: inset 0 0 20px 20px transparent;
}

</style>