import { useState } from 'react';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!form.name) newErrors.name = 'Name is required';
        if (!form.email.includes('@')) newErrors.email = 'Enter a valid email';
        if (!form.message) newErrors.message = 'Message is required';

        if (Object.keys(newErrors).length) {
            setErrors(newErrors);
        } else {
            alert('Message sent!');
            setForm({ name: '', email: '', message: '' });
            setErrors({});
        }
    };

    return (
        <section className="bg-white px-6 py-20">
            <div className="max-w-lg mx-auto">
                <h2 className="text-4xl font-bold text-center text-black mb-10">Contact Me</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <input name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange}
                            className="w-full p-3 border border-gray-400 rounded bg-white text-black" />
                        {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
                    </div>
                    <div>
                        <input name="email" type="email" placeholder="Your email" value={form.email} onChange={handleChange}
                            className="w-full p-3 border border-gray-400 rounded bg-white text-black" />
                        {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
                    </div>
                    <div>
                        <textarea name="message" placeholder="Your message" value={form.message} onChange={handleChange}
                            className="w-full p-3 border border-gray-400 rounded bg-white text-black h-32" />
                        {errors.message && <p className="text-red-500 mt-1">{errors.message}</p>}
                    </div>
                    <button type="submit" className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
