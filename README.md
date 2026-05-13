# DKPCB - Professional PCB Manufacturing Website

A modern, responsive Next.js website for DKPCB - a professional PCB (Printed Circuit Board) manufacturing and assembly service.

## 🚀 Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Online Quote Calculator** - Real-time PCB pricing based on specifications
- **File Upload** - Gerber file and BOM upload for inquiries
- **Admin Dashboard** - Order management system
- **Multi-language Ready** - i18n infrastructure (English/Chinese)
- **Docker Ready** - Containerized deployment support

## 📁 Project Structure

```
Claw/
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── page.tsx       # Homepage
│   │   ├── products/      # Products & Quote Calculator
│   │   ├── about/         # About Us
│   │   ├── contact/       # Contact Form
│   │   ├── login/         # User Login/Register
│   │   └── admin/         # Admin Dashboard
│   ├── components/        # React components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── lib/               # Utility functions
├── public/
│   └── pages/             # Static assets (logo, etc.)
├── messages/              # i18n translation files
├── Dockerfile             # Docker container config
└── docker-compose.yml     # Docker Compose config
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Deployment**: Docker

## 🚀 Getting Started

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Docker Deployment

```bash
# Build and run with Docker Compose
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Manual Docker Build

```bash
# Build the Docker image
docker build -t dkpcb .

# Run the container
docker run -p 3000:3000 dkpcb
```

## 📝 Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, features, and services |
| `/products` | PCB Quote Calculator with real-time pricing |
| `/about` | Company information and certifications |
| `/contact` | Contact form with file upload |
| `/login` | User authentication |
| `/admin` | Admin dashboard (demo: admin / dkpcb2026) |

## 🔧 Configuration

### Environment Variables

Create `.env.local` for local development:

```env
# No environment variables required for basic setup
# Add as needed for production deployment
```

## 📦 PCB Quote Calculator Parameters

The online quote calculator supports:

- **PCB Types**: Standard, Flexible, Rigid-Flex, Aluminum
- **Layers**: 1-8 layers
- **Size**: Custom dimensions (mm)
- **Quantity**: 1-10,000+ pcs
- **Material**: FR4, Aluminum, Rogers
- **Surface Finish**: HASL, ENIG, OSP
- **Copper Weight**: 1-3 oz
- **Solder Mask**: Green, Red, Blue, Black
- **Silkscreen**: White, Black, Yellow

## 🌐 Deployment

The application is containerized and ready for:

- **VPS**: DigitalOcean, Linode, AWS EC2
- **Container Platforms**: Railway, Render, Fly.io
- **Cloud Native**: AWS ECS, Google Cloud Run, Azure Container Instances

## 📄 License

Private - All rights reserved © 2026 DKPCB
