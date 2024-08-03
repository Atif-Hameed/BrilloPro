/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      // 'slg':''

      'xl': '1280px',

      '2xl': '1536px',
      '3xl':'1700px',
    },
    extend: {
      backgroundImage: {
        'web-banner': "url('/assets/bannerImg.svg')",
        'web-shade': "url('/assets/bannerShade.svg')",
        'service-banner': "url('/assets/servicesImg.png')",
        'work-banner': "url('/assets/workbanner.svg')",
        'shade': "url('/assets/footerShade.svg')",
        'footer-banner': "url('/assets/lowerFooter.svg')",
        'web-banner2': "url('/assets/webBanner.svg')",
        'web-shade2': "url('/assets/shadow.svg')",
        'commit-banner': "url('/assets/commit-banner.svg')",
        'blue-bg': "url('/assets/blue-bg.png')"
      },
      fontFamily: {
        quan_slim: ['var(--font-quan-slim)'],
        inter: ['var(--font-inter)'],
        satisfy: ['var(--font-satisfy)'],
        squadaOne: ['var(--font-Squada_One)'],
      },
      colors: {
        skyBlue: '#0182C4',
        darkBlue: '#20254F',
        darkSkyBlue: '#0182C4',
        gray: '#777777',
        darkBlack: '#232323',
      }
    },
  },
  plugins: [],
};
