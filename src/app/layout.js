import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata = {
  title: 'EcoTrack - Contrôlez votre consommation',
  description: 'Surveillez et optimisez votre consommation d énergie d eau de carburant et d aliments avec EcoTrack.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
      <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
    
  )
}
