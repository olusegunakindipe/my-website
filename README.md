# Olusegun Francis Akindipe — Personal Portfolio

A modern, responsive portfolio website built with Next.js 15, showcasing my skills as a full-stack software developer and web consultant. The site features interactive animations, contact form integration, Calendly scheduling, and a clean, professional design.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, and TypeScript
- **Responsive Design**: Mobile-first approach with Tailwind CSS v4
- **Interactive Animations**: Custom CSS animations, intersection observers, and smooth scrolling
- **Contact Form**: Integrated email functionality with Nodemailer
- **Calendly Integration**: Direct scheduling through Calendly widget
- **SEO Optimized**: Next.js metadata and font optimization
- **Code Quality**: ESLint, Prettier, Husky, and Commitlint for consistent code
- **Automated Workflows**: Semantic release and lint-staged for streamlined development
- **Tech Stack Showcase**: Animated marquee displaying technologies used

## 🛠️ Technologies Used

### Frontend

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS framework with custom animations
- **Lucide React** - Modern icon library
- **React Icons** - Social media and UI icons
- **React Simple Typewriter** - Typewriter animation effects
- **React Fast Marquee** - Smooth scrolling text animations
- **Radix UI** - Accessible component primitives
- **Class Variance Authority** - Component variant management

### Backend & Tools

- **Nodemailer** - Email service integration
- **ESLint** - Code linting and quality
- **Prettier** - Code formatting
- **Husky** - Git hooks for quality assurance
- **Commitlint** - Conventional commit messages
- **Semantic Release** - Automated versioning and releases
- **Lint-staged** - Pre-commit code quality checks

### External Integrations

- **Calendly** - Meeting scheduling widget
- **Google Maps** - Location embedding
- **Gmail SMTP** - Email delivery service

## 📁 Project Structure

```
src/
├── app/
│   ├── api/contact/          # Contact form API endpoint
│   ├── blocks/              # Main page sections
│   │   ├── About.tsx        # About section with profile
│   │   ├── Homepage.tsx     # Hero section with typewriter
│   │   ├── Projects.tsx     # Featured projects showcase
│   │   ├── Services.tsx     # Services offered
│   │   ├── Slider.tsx       # Tech stack marquee
│   │   └── Testimonials.tsx # Client testimonials
│   ├── components/          # Reusable components
│   │   ├── button/          # Custom button components
│   │   ├── form/            # Contact form
│   │   ├── layout/          # Header, Footer, Mobile components
│   │   ├── hamburger/       # Mobile menu toggle
│   │   ├── project-card/    # Project display cards
│   │   ├── scroll-arrow/    # Scroll to top functionality
│   │   ├── social-icons/    # Social media links
│   │   └── testimonial-card/ # Testimonial display
│   ├── data.tsx            # Static data and content
│   ├── hooks/              # Custom React hooks (useScrollSpy)
│   └── globals.css         # Global styles and animations
├── components/ui/          # Shadcn/ui components
└── lib/                    # Utility functions
```

## 🎨 Design Features

- **Custom Animations**: Slide-in effects, fade animations, intersection observer triggers, and hover transitions
- **Typography**: Pacifico and Marcellus Google Fonts for elegant typography
- **Color Scheme**: Dark theme with custom color variables and responsive header
- **Responsive Layout**: Mobile-first design with desktop enhancements
- **Interactive Elements**: Smooth scrolling navigation, animated buttons, and scroll spy
- **Tech Stack Display**: Animated marquee showcasing technologies
- **Intersection Observers**: Scroll-triggered animations for better performance

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd my-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file with:

   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_TO=recipient-email@example.com
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run prettier:check` - Check code formatting
- `npm run prettier:fix` - Fix code formatting
- `npm run release` - Create semantic release
- `npm run prepare` - Install Husky hooks

## 🔧 Development Workflow

This project uses modern development practices:

- **Conventional Commits**: All commits follow conventional commit format
- **Pre-commit Hooks**: Automatic linting and formatting before commits
- **Semantic Versioning**: Automated version management
- **Code Quality**: ESLint and Prettier ensure consistent code style
- **Lint-staged**: Pre-commit code quality checks for staged files

## 📧 Contact Form & Scheduling

- **Contact Form**: Uses Nodemailer to send emails directly from the website
- **Calendly Integration**: Direct scheduling through embedded Calendly widget
- **Email Configuration**: Configure your email credentials in environment variables

## 🚀 Deployment

This project is optimized for deployment on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any Node.js hosting provider**

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on every push

## 📱 Sections

- **Homepage**: Hero section with typewriter animation and profile image
- **Tech Stack**: Animated marquee showcasing technologies (React, Next.js, TypeScript, etc.)
- **Services**: Software Engineering, Web Consulting, Academic Research
- **Projects**: Featured work including zkTUBE and Chops Delight with intersection observer animations
- **About**: Professional background with animated profile image and social links
- **Testimonials**: Client feedback and reviews from real clients
- **Contact**: Interactive contact form with Google Maps integration

## 🎯 Key Features Implemented

- **Scroll Spy Navigation**: Active section highlighting based on scroll position
- **Intersection Observer**: Performance-optimized scroll animations
- **Mobile Responsive**: Hamburger menu with smooth transitions
- **Social Media Integration**: LinkedIn, GitHub, Facebook, Twitter, Instagram
- **Professional Contact Info**: Phone, email, and location with embedded map
- **Client Testimonials**: Real testimonials from past clients
- **Project Showcase**: Detailed project descriptions with live links

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 📞 Contact

**Olusegun Francis Akindipe**

- **Location**: Birmingham, United Kingdom
- **Email**: akinfergie@gmail.com
- **LinkedIn**: [https://www.linkedin.com/in/olusegun-francis-akindipe/](https://www.linkedin.com/in/olusegun-francis-akindipe/)
- **GitHub**: [https://github.com/olusegunakindipe](https://github.com/olusegunakindipe)
- **Twitter**: [https://x.com/AkinFergie](https://x.com/AkinFergie)
- **Instagram**: [https://www.instagram.com/akinfergie/](https://www.instagram.com/akinfergie/)
- **Facebook**: [https://www.facebook.com/akindipe.fergie](https://www.facebook.com/akindipe.fergie)
- **Calendly**: [https://calendly.com/akinfergie/get-in-touch](https://calendly.com/akinfergie/get-in-touch)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
