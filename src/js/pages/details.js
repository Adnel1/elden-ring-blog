import React, { useContext } from "react";
import { useParams } from 'react-router-dom';
import { Context } from "../store/appContext";

import placeholderImage from "../img/placeholder.jpg";

const Details = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();

    // Safeguard initialization of variables
    const ammos = store.ammos || [];
    const armors = store.armors || [];
    const ashes = store.ashes || [];
    const bosses = store.bosses || [];
    const classes = store.classes || [];
    const creatures = store.creatures || [];
    const incantations = store.incantations || [];
    const items = store.items || [];
    const locations = store.locations || [];
    const npcs = store.npcs || [];
    const shields = store.shields || [];
    const sorceries = store.sorceries || [];
    const spirits = store.spirits || [];
    const talismans = store.talismans || [];
    const weapons = store.weapons || [];
    const favorites = store.favorites || [];

    // Joins all the data fetched from the API into a single array
    const allEntities = [...ammos, ...armors, ...ashes, ...bosses, ...classes, ...creatures, ...incantations, ...items, ...locations, ...npcs, ...shields, ...sorceries, ...spirits, ...talismans, ...weapons];

    // Grabs data of entity by matching id
    const currentEntity = allEntities.find((item) => item.id === id);

    if (!currentEntity) return <></>;

    return (
        <div className="container vh-100 pt-5 pb-5">
            <div className="card card-style p-4">
                <div className="row">
                    <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
                        <img src={currentEntity.image || placeholderImage} className="img-fluid rounded-start" alt="entity"></img>
                    </div>
                    <div className="col-12 col-md-8 text-center">
                        <div className="card-body">
                            <h1 className="card-title">{currentEntity.name}</h1>
                            {currentEntity.type &&
                                <h5>{currentEntity.type}</h5>
                            }
                            {currentEntity.category &&
                                <h5>{currentEntity.category}</h5>
                            }
                            {currentEntity.affinity &&
                                <h5>{currentEntity.affinity}</h5>
                            }
                            {currentEntity.location &&
                                <h5>{currentEntity.location}</h5>
                            }
                            <p className="card-text">{currentEntity.description}</p>
                        </div>
                        <div className="card-body">
                            {currentEntity.attackPower &&
                                <>
                                    <h5>Attack Power</h5>
                                    <div className="d-flex flex-wrap justify-content-around mb-4">
                                        {currentEntity.attackPower.map((item, index) => (
                                            <div className="text-center" key={index}>
                                                <h6>{item.name}</h6>
                                                <div>{item.amount}</div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            }

                            {currentEntity.dmgNegation &&
                                <>
                                    <h5>Damage Negation</h5>
                                    <div className="d-flex flex-wrap justify-content-around mb-4">
                                        {currentEntity.dmgNegation.map((item, index) => (
                                            <div className="text-center" key={index}>
                                                <h6>{item.name}</h6>
                                                <div>{item.amount}</div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            }

                            {currentEntity.skill &&
                                <div className="text-center">
                                    <h5>Skill</h5>
                                    <div>{currentEntity.skill}</div>
                                </div>
                            }

                            {currentEntity.healthPoints &&
                                <>
                                    <h5>Health Points</h5>
                                    <div className="d-flex flex-wrap justify-content-around mb-4">
                                        <div className="text-center">
                                            <div>{currentEntity.healthPoints}</div>
                                        </div>
                                    </div>
                                </>
                            }

                            {currentEntity.stats &&
                                <>
                                    <h5>Stats</h5>
                                    <div className="d-flex flex-wrap justify-content-around mb-4">
                                        {Object.entries(currentEntity.stats).map(([key, value], index) => (
                                            <div className="text-center" key={index}>
                                                <h6>{key}</h6>
                                                <div>{value}</div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            }

                            {currentEntity.drops &&
                                <>
                                    <h5>Drops</h5>
                                    <div className="d-flex flex-wrap justify-content-around mb-4">
                                        {currentEntity.drops.map((item, index) => (
                                            <div className="text-center" key={index}>
                                                <div>{item}</div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            }

                            {currentEntity.requires &&
                                <>
                                    <h5>Requires</h5>
                                    <div className="d-flex flex-wrap justify-content-around mb-4">
                                        {currentEntity.requires.map((item, index) => (
                                            <div className="text-center" key={index}>
                                                <h6>{item.name}</h6>
                                                <div>{item.amount}</div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            }

                            {currentEntity.effect &&
                                <>
                                    <h5>Effect</h5>
                                    <div className="d-flex flex-wrap justify-content-around mb-4">
                                        <div className="text-center">
                                            <div>{currentEntity.effect}</div>
                                        </div>
                                    </div>
                                </>
                            }

                            {currentEntity.role &&
                                <>
                                    <h5>Role</h5>
                                    <div className="d-flex flex-wrap justify-content-around mb-4">
                                        <div className="text-center">
                                            <div>{currentEntity.role}</div>
                                        </div>
                                    </div>
                                </>
                            }

                            {currentEntity.attack &&
                                <>
                                    <h5>Attack</h5>
                                    <div className="d-flex flex-wrap justify-content-around mb-4">
                                        {currentEntity.attack.map((item, index) => (
                                            <div className="text-center" key={index}>
                                                <h6>{item.name}</h6>
                                                <div>{item.amount}</div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            }

                            {currentEntity.defence &&
                                <>
                                    <h5>Defence</h5>
                                    <div className="d-flex flex-wrap justify-content-around mb-4">
                                        {currentEntity.defence.map((item, index) => (
                                            <div className="text-center" key={index}>
                                                <h6>{item.name}</h6>
                                                <div>{item.amount}</div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            }

                            {currentEntity.scalesWith &&
                                <>
                                    <h5>Scales With</h5>
                                    <div className="d-flex flex-wrap justify-content-around mb-4">
                                        {currentEntity.scalesWith.map((item, index) => (
                                            <div className="text-center" key={index}>
                                                <h6>{item.name}</h6>
                                                <div>{item.scaling}</div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            }

                            {currentEntity.requiredAttributes &&
                                <>
                                    <h5>Requires Attributes</h5>
                                    <div className="d-flex flex-wrap justify-content-around mb-4">
                                        {currentEntity.requiredAttributes.map((item, index) => (
                                            <div className="text-center" key={index}>
                                                <h6>{item.name}</h6>
                                                <div>{item.amount}</div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;