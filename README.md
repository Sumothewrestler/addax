# ADDAX AUTOMOTIVE - Professional Car Service Center

A modern, responsive automotive service center website built with Next.js, TypeScript, and Tailwind CSS. Located in Vanagaram, Chennai, providing professional car repair, AC services, denting & painting, and general maintenance with 24/7 availability.

## Features

- 🚗 **Automotive Services** - Complete car repair, AC service, denting & painting solutions
- 🛠️ **24/7 Service Center** - Professional automotive services available round the clock
- 📱 **Responsive Design** - Optimized for desktop and mobile devices
- 🎨 **Modern UI** - Dark theme with red accent colors, professional automotive design
- 🔄 **Interactive Components** - Hero slider, testimonial carousel, and service showcases
- ⚡ **Performance Optimized** - Built with Next.js for fast loading and SEO
- 📍 **Local Business** - Located in Vanagaram, Chennai with actual customer reviews

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **ESLint** - Code linting and formatting

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd garage-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Components

- **Header** - Navigation with Services, Insurance, and Pricing menus
- **HeroSlider** - Auto-rotating hero section highlighting services and insurance
- **DetailedServices** - Comprehensive service listings with time estimates and pricing
- **InsuranceSection** - Complete insurance claim assistance process and documentation
- **PricingSection** - Transparent pricing with maintenance packages
- **TestimonialCarousel** - Customer reviews focusing on insurance assistance
- **Footer** - Updated footer with service and insurance links

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Homepage with service focus
│   └── layout.tsx        # Root layout
├── components/
│   ├── Header.tsx        # Updated navigation
│   ├── HeroSlider.tsx    # Service & insurance focus
│   ├── DetailedServices.tsx  # Service categories with pricing
│   ├── InsuranceSection.tsx   # Insurance claim assistance
│   ├── PricingSection.tsx     # Transparent pricing & packages
│   ├── TestimonialCarousel.tsx # Customer success stories
│   └── Footer.tsx        # Updated service links
└── styles/
    └── globals.css
```

## Customization

1. **Colors** - Modify the color scheme in `tailwind.config.js`
2. **Content** - Update product data, testimonials, and services in respective components
3. **Images** - Replace placeholder images with actual product photos
4. **Branding** - Update logo and company information in Header and Footer components

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com/new):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy with default settings

For other platforms, build the project with `npm run build` and serve the generated `out` directory.

## License

This project is open source and available under the [MIT License](LICENSE).
