import React, { useState, useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../../styles/card.css";
import placeholderImage from "../img/placeholder.jpg";

const Ashes = () => {
    const { store, actions } = useContext(Context);
    const ashes = store.ashes || [];
    const [expanded, setExpanded] = useState({});
    const [isOverflowing, setIsOverflowing] = useState({});
    const textRefs = useRef([]);

    useEffect(() => {
        const checkOverflow = () => {
            const updatedIsOverflowing = {};
            textRefs.current.forEach((ref, index) => {
                if (ref) {
                    updatedIsOverflowing[index] = ref.scrollHeight > ref.clientHeight;
                }
            });
            setIsOverflowing(updatedIsOverflowing);
        };

        checkOverflow();
    }, [ashes]);

    const toggleExpand = (index) => {
        setExpanded({ ...expanded, [index]: !expanded[index] });
    };

    return (
        <>
            <div className="row g-4 mb-5">
                {ashes.map((ash, index) => (
                    <div className="col-12 col-md-6 col-lg-3" key={index}>
                        <div className="card card-style h-100">
                            <img className="card-img-top custom-image" src={ash.image || placeholderImage} alt={ash.name}></img>
                            <div className="card-body d-flex flex-column">
                                <h6 className="card-title">{ash.name}</h6>
                                <p
                                    className={`card-text ${expanded[index] ? 'expanded' : ''}`}
                                    ref={(el) => (textRefs.current[index] = el)}
                                >
                                    {ash.description}
                                </p>
                                {isOverflowing[index] && (
                                    <div className="btn text-light p-0 align-left mt-auto expand-toggle" onClick={() => toggleExpand(index)}>
                                        {expanded[index] ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                                    </div>
                                )}
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <Link to={`/details/${ash.id}`} className="btn card-button">
                                    Learn More!
                                </Link>
                                <button
                                    onClick={() => actions.toggleFavorites(ash.id, !store.favorites.includes(ash.id))}
                                    className={store.favorites.includes(ash.id) ? 'btn favorites-button-active' : 'btn card-button-outline heart-button'}
                                >
                                    <FontAwesomeIcon icon={faHeart} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Ashes;
