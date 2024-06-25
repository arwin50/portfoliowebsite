<template>
  <header>
    <nav class="fixed z-10 bg-black/50 top-0 w-full flex px-8 md:px-20 text-white justify-between py-3 items-center">
      <span class="text-3xl tracking-widest">
        <a href="#about">&#123 niw &#125</a>
      </span>
      <div class="flex flex-col ">
        <button @click="isOpen = !isOpen" class=" md:hidden focus:outline-none ">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
    
      <div :class="{'block': isOpen, 'hidden': !isOpen}" class="md:flex md:items-center md:space-x-10 w-full md:w-auto relative ">
        <ul class="absolute top-[-10px] right-0  md:static flex flex-col md:flex-row md:items-center text-lg space-y-4 md:space-y-0 md:space-x-10 tracking-wide items-center md:p-0 p-2 md:rounded-none rounded-md mt-4 md:mt-0 md:bg-transparent bg-black/50">
          <li class="hover:text-[#ffe169]">
            <a href="#projects" class="hover:shadow p-2 rounded-lg">projects</a>
          </li>
          <li class="hover:text-[#ffe169]">
            <button @click="openResume" class="hover:shadow p-2 rounded-lg">resume</button>
          </li>
        </ul>
      </div>
        </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    openResume() {
      window.open('./resume.pdf', '_blank');
    }
  }
};
</script>