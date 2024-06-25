import Link from 'next/link'
import FeatureCard from './components/FeatureCard'
import ElectricityCalculator from './components/ElectricityCalculator'
import PriceComparison from './components/PriceComparison'
import PharmacyNotification from './components/PharmacyNotification'

export default function Home() {
    return (
        <main>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-green-400 to-blue-500 text-white">
                <div className="container mx-auto px-6 py-24 text-center">
                    <h1 className="text-5xl font-bold mb-4">Prenez le contrôle de votre consommation</h1>
                    <p className="text-xl mb-8">Surveillez, analysez et réduisez votre impact environnemental en temps réel.</p>
                    <Link href="/signup" className="bg-white text-blue-500 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300">
                        Commencer gratuitement
                    </Link>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Fonctionnalités clés</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <FeatureCard
                            title="Suivi en temps réel"
                            description="Visualisez votre consommation d'énergie, d'eau et plus encore en temps réel."
                            icon="⚡"
                        />
                        <FeatureCard
                            title="Analyse intelligente"
                            description="Obtenez des insights personnalisés pour réduire votre consommation et vos coûts."
                            icon="🧠"
                        />
                        <FeatureCard
                            title="Objectifs écologiques"
                            description="Définissez et atteignez vos objectifs de réduction d'empreinte carbone."
                            icon="🌱"
                        />
                    </div>
                </div>

                <div className="w-full max-w-7xl mb-12">
                    <ElectricityCalculator />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl mb-12">
                    <PriceComparison />
                    <PharmacyNotification />
                </div>

            </section>

            {/* CTA Section */}
            <section className="bg-gray-100 py-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">Prêt à réduire votre impact ?</h2>
                    <p className="text-xl mb-8">Rejoignez des milliers d'utilisateurs qui font la différence chaque jour.</p>
                    <Link href="/signup" className="bg-blue-500 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-600 transition duration-300">
                        S'inscrire maintenant
                    </Link>
                </div>
            </section>
        </main>
    )
}