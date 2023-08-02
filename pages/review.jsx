import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/review.css";
import { connect } from 'react-redux';
import reviewReducer, { addReview } from "../redux/reviewReducer"
const Review = (props) => {
    const [contactInfo, setContactInfo] = useState({
        name: "",
        email: "",
        reviews: "",
    });
    const [showNotification, setShowNotification] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addReview(contactInfo);
        setContactInfo({
            name: "",
            email: "",
            reviews: "",
        });
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 3000);
    };

    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="mx-auto max-w-2xl">
                <div className="text-center">
                    <h2 className="text-xl text-gray-800 font-bold sm:text-3xl dark:text-white">
                        Post a comment
                    </h2>
                </div>

                <div className="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-gray-800 dark:border-gray-700">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4 sm:mb-8">
                            <label
                                htmlFor="hs-feedback-post-comment-name-1"
                                className="block mb-2 text-sm font-medium dark:text-white"
                            >
                                Full name
                            </label>
                            <input
                                type="text"
                                id="hs-feedback-post-comment-name-1"
                                className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                                name="name"
                                placeholder="Full name"
                                value={contactInfo.name}
                                onChange={(e) =>
                                    setContactInfo({ ...contactInfo, name: e.target.value })
                                }
                            />
                        </div>

                        <div className="mb-4 sm:mb-8">
                            <label
                                htmlFor="hs-feedback-post-comment-email-1"
                                className="block mb-2 text-sm font-medium dark:text-white"
                            >
                                Email address
                            </label>
                            <input
                                type="email"
                                id="hs-feedback-post-comment-email-1"
                                className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                                name="email"
                                placeholder="Email address"
                                value={contactInfo.email}
                                onChange={(e) =>
                                    setContactInfo({ ...contactInfo, email: e.target.value })
                                }
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="hs-feedback-post-comment-textarea-1"
                                className="block mb-2 text-sm font-medium dark:text-white"
                            >
                                Comment
                            </label>
                            <div className="mt-1">
                                <textarea
                                    id="hs-feedback-post-comment-textarea-1"
                                    rows="3"
                                    className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                                    name="reviews"
                                    placeholder="Leave your comment here..."
                                    value={contactInfo.reviews}
                                    onChange={(e) =>
                                        setContactInfo({ ...contactInfo, reviews: e.target.value })
                                    }
                                ></textarea>
                            </div>
                        </div>

                        <div className="mt-6 grid">
                            <button
                                type="submit"
                                className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all dark:focus:ring-offset-gray-800"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>

                <div className="mt-8">
                    {showNotification && (
                        <div className="text-green-500 mb-4">
                            Review submitted successfully!
                        </div>
                    )}
                    <Slider>
                        {props.reviews.map((review, index) => (
                            <div
                                className="relative text-center transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                                style={{ backfaceVisibility: "hidden" }}
                                key={index}
                            >
                                <p className="mx-auto max-w-4xl text-xl italic text-neutral-700 dark:text-neutral-300">
                                    {review.reviews}
                                </p>
                                <div className="mb-6 mt-12 flex justify-center">
                                    <img
                                        src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?q=10&h=200"
                                        className="h-24 w-24 rounded-full shadow-lg dark:shadow-black/30"
                                        alt="sample image"
                                    />
                                </div>
                                <p className="text-neutral-500 dark:text-neutral-300">
                                    - {review.name}
                                </p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        reviews: state.reviews,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addReview: (reviewData) => dispatch(addReview(reviewData)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Review)