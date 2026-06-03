<template>
  <div>
    <div class="container">
      <div class="flex flex-col justify-center">
        <MainHeading title="Contact Me" text-size="text-3xl lg:text-6xl" :is-uppercase="true" class="my-14" />

        <div class="flex flex-col lg:flex-row justify-around mb-10">
          <div class="w-11/12 lg:w-auto mx-auto flex flex-col items-start gap-20 mb-8">
            <!-- Start Phone Number -->
            <div class="contact-info flex h-fit justify-center items-center gap-2">
              <div class="contact-icon mb-4">
                <PhoneOutline class="text-5xl text-blue-500" />
              </div>
              <div>
                <div class="contact-info__title text-2xl font-semibold capitalize text-blue-600 dark:text-blue-500">Phone Number</div>
                <div class="contact-info__method">
                  <a href="tel:+201556239800" class="text-base text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-500 transition-colors duration-300 ease-in-out">+20 155 6239 800</a>
                </div>
              </div>
            </div>
            <!-- End Phone Number -->
            
            <!-- Start Email -->
            <div class="contact-info flex h-fit justify-center items-center gap-2">
              <div class="contact-icon mb-4">
                <EmailOutline class="text-5xl text-blue-500" />
              </div>
              <div>
                <div class="contact-info__title text-2xl font-semibold capitalize text-blue-600 dark:text-blue-500">Email</div>
                <div class="contact-info__method">
                  <a href="mailto:mohamedhossamharoun@gmail.com" class="text-base text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-500 transition-colors duration-300 ease-in-out">mohamedhossamharoun@gmail.com</a>
                </div>
              </div>
            </div>
            <!-- End Email -->

            <!-- Start Location -->
            <div class="contact-info flex h-fit justify-center items-center gap-2">
              <div class="contact-icon mb-4">
                <MapMarkerOutline class="text-5xl text-blue-500" />
              </div>
              <div>
                <div class="contact-info__title text-2xl font-semibold capitalize text-blue-600 dark:text-blue-500">Location</div>
                <div class="contact-info__method">
                  <p class="text-base text-gray-600 dark:text-gray-400">Al-Mansoura, Dakahlia, EG</p>
                </div>
              </div>
            </div>
            <!-- End Location -->
          </div>

          <ContactForm class="w-11/12 lg:w-1/3 mx-auto" />
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import MainHeading from '../components/MainHeading.vue';
import ContactForm from '../components/ContactForm.vue';

import PhoneOutline from 'vue-material-design-icons/PhoneOutline.vue';
import EmailOutline from 'vue-material-design-icons/EmailOutline.vue';
import MapMarkerOutline from 'vue-material-design-icons/MapMarkerOutline.vue';

</script>


<style scoped>

</style>