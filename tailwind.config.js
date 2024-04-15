/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#1C1C1C',
        'branding': '#D663FF',
        'white': '#ffffff',
        'paragraph': '#939393',

        // For tech stack colors
        'html': '#F77B22',
        'css': '#22AAF7',
        'javascript': '#E8D44D',
        'tailwind': '#86DAFF',
        'react': '#14A8D8',
        'photoshop': '#001E36',
        'illustrator': '#310000',

        //Footer socials
        'linkedIn': '#1B57B1',
        'instagram': '#FC01D4',
        'email': '#F1E363',
        'hireMe': '#0BFE98'

      },

      fontFamily: {
        sans: ["Schibsted Grotesk"],
        serif: ["Times New Roman"]
      },

      spacing : {

        //Overall page spacing
        'desktop-padding': '4rem',
        'mobile-padding': '1rem',

        //Element spacing
        'large': '32rem',
        'semi-large': '10.625rem',
        'medium': '6rem',
        'small': '4rem',
        'x-small': '2rem',

        //Mobile
        'mobile-large': '17rem',
        'mobile-small': '2rem'
      },

      screens: {
        'mobile': '368px',
        'tablet': '768px',
        'lg': '1366px',
        'xl': '1920px' 
      }
    },
  },
  plugins: [],
}

