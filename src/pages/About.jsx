const About = () => {
    return (
        <section className="bg-white px-6 py-20">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-black mb-10">About Me</h2>

                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    I’m Max Rivera, a Digital Media student at UCF with a passion for creative design and clean user experiences.
                    My journey into the world of web design started from a place of curiosity — I’ve always been fascinated by how visuals
                    can shape how people interact with technology. That curiosity turned into a love for designing with purpose.
                </p>

                <p className="text-md text-gray-600 mb-8 leading-relaxed">
                    I believe great design isn’t just about how something looks — it’s about how it works, how it feels, and how it makes people feel.
                    I enjoy turning complex problems into intuitive experiences, whether I’m coding a portfolio or designing a mobile app.
                    I love finding inspiration from everyday moments, photography, K-pop culture, and the creative people around me.
                </p>

                <p className="text-md text-gray-600 mb-12 leading-relaxed">
                    I’m constantly growing my skill set, currently focusing on responsive design, UX strategy, and front-end development with tools like
                    React and Figma. My goal is to build meaningful digital experiences that connect, inspire, and empower others — while still being uniquely “me.”
                </p>

                <h3 className="text-2xl font-bold text-black mt-16 mb-4 text-left">Skills</h3>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
                    {['HTML/CSS', 'JavaScript', 'Figma', 'UX Design'].map(skill => (
                        <div
                            key={skill}
                            className="p-3 bg-gray-100 rounded text-black font-medium text-sm shadow"
                        >
                            {skill}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default About;
