import { useState, useEffect } from "react";
import './Testimonial.css'

function TestimonialCarousel({ testimonials }) {
    const [current, setCurrent] = useState(0);

    const nextSlide = () =>
        setCurrent((prev) => (prev + 1) % testimonials.length);

    const prevSlide = () =>
        setCurrent((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );

    // Auto slide
    useEffect(() => {
        const interval = setInterval(nextSlide, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel-wrapper">

            <div
                className="carousel-track"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                    <div className="slide" key={testimonials.id}>
                        <div className="slide-content">

                            <div className="image-wrapper">
                                <img src={testimonials.image} alt={testimonials.name} />
                            </div>

                            <div className="text-wrapper">
                                <p className="testimonial-text">“{testimonials.text}”</p>

                                <div className="author">
                                    <h3>{testimonials.name}</h3>
                                    <p>{testimonials.role}</p>
                                </div>
                            </div>

                        </div>
                    </div>
            </div>

            <button className="nav left" onClick={prevSlide}></button>
            <button className="nav right" onClick={nextSlide}></button>

        </div>
    );

}

export default TestimonialCarousel;