import Link from "next/link";

export default function About() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                        We Never Do Normal
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        At Kasun, we&apos;re not in the business to simply recreate. Instead, we innovate.
                        We&apos;re a global AI agency specializing in software, content, music, and influencer marketing.
                    </p>
                </div>
            </section>

            {/* What We Do */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Actually Do</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We understand how to connect people. Content is communication and it&apos;s what we do best.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-[#50C0E6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">IT Support</h3>
                            <p className="text-gray-600">Innovative IT solutions to enhance operational efficiency</p>
                        </div>

                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Content Creation</h3>
                            <p className="text-gray-600">Compelling content that engages your audience</p>
                        </div>

                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-[#406BAC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Music</h3>
                            <p className="text-gray-600">Creative music solutions for your brand</p>
                        </div>

                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Influencer Marketing</h3>
                            <p className="text-gray-600">Dynamic marketing strategies that elevate your brand</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision, Mission, Goals */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Empowering Through Innovation and Impact</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <h3 className="text-2xl font-bold text-[#50C0E6] mb-4">Vision</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We envision a future where technology and creativity converge to drive unparalleled
                                growth and success for our clients. We aim to be the leading force in transforming
                                businesses through innovative solutions.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <h3 className="text-2xl font-bold text-green-600 mb-4">Mission</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our mission is to provide exceptional IT support, compelling content, and effective
                                marketing services. We empower clients by delivering solutions that enhance operational
                                efficiency and elevate brand presence.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <h3 className="text-2xl font-bold text-[#406BAC] mb-4">Goal</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our goal is to continuously innovate and expand our services to meet evolving client needs.
                                We&apos;re committed to fostering a culture of excellence and making a lasting impact through our expertise.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">A Tale of Passion, Purpose, and Excellence</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Our story is one of relentless passion, clear purpose, and unwavering commitment to excellence.
                            We have established ourselves as trusted partners across the globe.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="p-8">
                            <div className="text-5xl font-bold text-[#50C0E6] mb-2">17+</div>
                            <div className="text-xl text-gray-600">Years Experience</div>
                        </div>

                        <div className="p-8">
                            <div className="text-5xl font-bold text-green-600 mb-2">150+</div>
                            <div className="text-xl text-gray-600">Trusted Partners</div>
                        </div>

                        <div className="p-8">
                            <div className="text-5xl font-bold text-[#406BAC] mb-2">20k+</div>
                            <div className="text-xl text-gray-600">Active Installs</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-gradient-to-r from-[#50C0E6] to-[#406BAC] py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Stand Up, Act Now: Together We Can Make a Difference
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        We believe in the power of collective action. By working together, we can create
                        meaningful change and drive impactful results.
                    </p>
                    <div className="space-x-4">
                        <Link
                            href="/contact"
                            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#50C0E6] transition-colors inline-block"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}