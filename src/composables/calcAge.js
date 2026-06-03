import { ref, computed } from 'vue';

export function useAgeCalculator(birthdate) {
  const birthdateObj = new Date(birthdate);
  const currentDate = ref(new Date());

  const age = computed(() => {
    const years = currentDate.value.getFullYear() - birthdateObj.getFullYear();
    
    if (
      currentDate.value.getMonth() < birthdateObj.getMonth() ||
      (currentDate.value.getMonth() === birthdateObj.getMonth() && currentDate.value.getDate() < birthdateObj.getDate())
    ) {
      return years - 1;
    } else {
      return years;
    }
  });

  return {
    age
  };
}
