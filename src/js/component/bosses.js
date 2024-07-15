import React, { useState, useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import placeholderImage from "../img/placeholder.jpg";

const Bosses = () => {
    const { store, actions } = useContext(Context);
    const bosses = store.bosses || [];
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
    }, [bosses]);

    const toggleExpand = (index) => {
        setExpanded({ ...expanded, [index]: !expanded[index] });
    };

    return (
        <>
            <div className="row g-4 mb-5">
                {bosses.map((boss, index) => (
                    <div className="col-12 col-md-6 col-lg-3" key={index}>
                        <div className="card card-style h-100">
                            <img className="card-img-top custom-image" src={boss.image || placeholderImage} alt={boss.name}></img>
                            <div className="card-body d-flex flex-column">
                                <h6 className="card-title">{boss.name}</h6>
                                <p
                                    className={`card-text ${expanded[index] ? 'expanded' : ''}`}
                                    ref={(el) => (textRefs.current[index] = el)}
                                >
                                    {boss.description}
                                </p>
                                {isOverflowing[index] && (
                                    <div className="btn text-light p-0 align-left mt-auto expand-toggle" onClick={() => toggleExpand(index)}>
                                        {expanded[index] ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                                    </div>
                                )}
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <Link to={`/details/${boss.id}`} className="btn card-button">
                                    Learn More!
                                </Link>
                                <button
                                    onClick={() => actions.toggleFavorites(boss.id, !store.favorites.includes(boss.id))}
                                    className={store.favorites.includes(boss.id) ? 'btn favorites-button-active' : 'btn card-button-outline heart-button'}
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

export default Bosses;
