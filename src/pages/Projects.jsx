const projects = [
    {
        title: 'KpopWave',
        description: 'A sleek e-commerce site concept for K-pop fans.',
        image: '/projects/kpopwave.jpg',
        link: 'https://www.figma.com/design/YlUTxAXUkpG43vWYfVeOz5/Mobile-Kpop-App-Project?node-id=44-403&p=f&t=zpCRjCTjdUVo9oy4-0',
    },
    {
        title: 'Candle Website Redesign',
        description: 'Redesign of an accessible candle interface.',
        image: '/projects/ux-redesign.jpg',
        link: 'https://www.figma.com/design/VqVaFZCTgJNqFvB4Ajf9p0/Redesign-Old-Website-Assignment?node-id=3-84&m=dev&t=NT4n0hoXxel403IU-1',
    },
    {
        title: 'Photography Portfolio',
        description: 'A modern photo gallery layout.',
        image: '/projects/photo-portfolio.jpg',
        link: 'https://www.instagram.com/maxemiliano228/',
    },
];

const Projects = () => {
    return (
        <section className="bg-white px-6 py-20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-black mb-12">Projects</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-black text-white rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-5">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-sm text-gray-300">{project.description}</p>

                                {project.title === 'Photography Portfolio' && (
                                    <div className="mt-4 text-sm text-gray-200 leading-relaxed">
                                        <p>
                                            Photography is a way to show people a different perspective of the world — how unique and beautiful it can be.
                                            It's how I express what I see and feel, capturing small moments that tell a bigger story. It’s my lens on life.
                                        </p>
                                    </div>
                                )}

                                {/* KpopWave Project Detail */}
                                {project.title === 'KpopWave' && (
                                    <div className="mt-4 text-sm text-gray-200 leading-relaxed space-y-3">
                                        <p><strong>Part 1:</strong> KpopWave is a mobile app for K-pop fans to explore and buy authentic merch. It solves problems like fake products and high shipping fees, while encouraging user interaction through favorites, reviews, and ratings.</p>
                                        <p><strong>Step 1:</strong> I started with brainstorming. Inspired by K-pop fandoms, I wanted to combine social features with shopping.</p>
                                        <p><strong>Step 2:</strong> I created a user flow that prioritized browsing and favorites.</p>
                                        <p><strong>Step 3:</strong> I developed a user persona (Mia Kim) to shape design features like authentication and exclusive alerts.</p>
                                        <p><strong>Step 4:</strong> Explored color palettes: Candy Crush, Sunset Glow, and Pastel Dream. Candy Crush was chosen for its bold vibe.</p>
                                        <p><strong>Step 5:</strong> Typography: Montserrat Bold for headings, Open Sans for body text.</p>
                                        <p><strong>Step 6:</strong> Designed 5 screens: Home, Search, Product Detail, Favorites, and Profile.</p>
                                        <p><strong>Step 7:</strong> Learned to balance visual excitement with user clarity.</p>
                                        <p><strong>Part 2:</strong> I improved the app’s UI by adding filters, ad sections, a “Write a Review” feature, consistent fonts, and better spacing. The redesign focused on visual polish and usability while reflecting the energetic spirit of K-pop culture.</p>
                                    </div>
                                )}

                                {/* Candle Project Detail */}
                                {project.title === 'Candle Website Redesign' && (
                                    <div className="mt-4 text-sm text-gray-200 leading-relaxed space-y-3">
                                        <p><strong>Step 1: Critique</strong> – I reviewed the "Candles by Victoria" site and found issues like an overcrowded layout, inconsistent design, and hidden reviews. I suggested fixes like simplifying the layout, relocating reviews, improving the search bar, and enhancing mobile responsiveness.</p>
                                        <p><strong>Step 2: Research</strong> – I studied Crate & Barrel and Allbirds for eCommerce inspiration. Their clean design, effective filtering, and focus on customer trust guided my redesign priorities: organization, accessibility, and strong visual presentation.</p>
                                        <p><strong>Step 3: Ideation</strong> – I explored earthy and warm color palettes, and paired Roboto Slab (headings) with Open Sans (body). I sketched six page layouts, focusing on clarity for homepage, product catalog, cart, and more.</p>
                                        <p><strong>Step 4: Improve and Prototype</strong> – Using Figma, I created high-fidelity mockups with a creamy yellow and soft gray color scheme. Pages like the about, product catalog, and checkout were redesigned for better clarity and navigation.</p>
                                        <p><strong>Step 5: Compilation</strong> – I organized all stages of the project into one Figma file. Though my file hierarchy wasn’t perfect, this process taught me to better manage my design assets and reflect on the redesign journey.</p>
                                    </div>
                                )}

                                <a
                                    href={project.link}
                                    className="inline-block mt-4 underline text-white hover:text-gray-400"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
