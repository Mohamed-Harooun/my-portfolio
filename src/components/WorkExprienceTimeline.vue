<template>
  <div class="timeline-item w-full max-w-3xl">
    <!-- Vertical Timeline #1 -->
    <div class="">
        <!-- Item #1 -->
        <div class="relative pl-8 sm:pl-32 py-6 group">
            <!-- Purple label -->
            <div class="job-title font-caveat font-medium text-md lg:text-2xl text-indigo-500 mb-1 sm:mb-0">{{ jobTitle }}</div>
            <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
              <!-- Add group-last:before:hidden to last item -->
            <div class="timeline-container" :class="{ 'before:!h-3/4': isLast }">
                <span class="date sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold capitalize w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">{{ date }}</span>
                <div class="company-name text-xl font-bold text-slate-500 dark:text-slate-400">{{ companyName }}</div>
            </div>
            <!-- Content -->
            <div class="text-slate-500">
              <ul class="responsibilities flex flex-col gap-3 mt-4">
                <li v-for="responsiblity in responsibilities" class="relative pl-6 text-xs lg:text-xl text-gray-500 dark:text-slate-400 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-indigo-600 before:rounded-full">{{ responsiblity }}</li>
              </ul>
            </div>
        </div>
    </div>
    <!-- End: Vertical Timeline #1 -->
  </div>
</template>


<script setup>
const props = defineProps({
  jobTitle: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  responsibilities: {
    type: Array,
    required: true
  },
  isLast: {
    type: Boolean,
    required: false
  }
})
</script>

<style>
.timeline-container {
  @apply flex flex-col sm:flex-row items-start mb-1 before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5;
}
</style>