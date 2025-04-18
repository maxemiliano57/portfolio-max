const Home = () => {
    return (
        <section
            className="min-h-[calc(120vh-132px)] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4"
            style={{
                backgroundImage: "url('/background.jpg')",
            }}
        >
            <div className="bg-black bg-opacity-70 p-10 rounded-lg shadow-xl max-w-3xl text-white text-center">
                <h1 className="text-5xl font-bold mb-4">Hi, I’m Max 👋</h1>
                <p className="text-lg text-gray-300 mb-6">
                    A Digital Media student passionate about creating bold, clean, and
                    interactive experiences — from web designs to visual storytelling.
                </p>

                <p className="text-md text-gray-300 mb-4 leading-relaxed">
                    I use design to give people a new way of seeing the world. Whether it’s
                    through websites, mobile apps, or photography — I bring ideas to life
                    with clarity and creativity. Every pixel, every detail, tells a story.
                </p>

                <p className="text-md text-gray-400 italic mb-8">
                    "Design is the silent ambassador of your brand." – Paul Rand
                </p>

                <a
                    href="/projects"
                    className="inline-block bg-white text-black font-semibold px-6 py-3 rounded hover:bg-gray-200 transition"
                >
                    View My Projects
                </a>
            </div>
        </section>
    );
};

export default Home;
