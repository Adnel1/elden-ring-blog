import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import { Context } from "../store/appContext";

import "../../styles/navbar.css";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  // Initialize empty arrays if store data is undefined
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

  const getEntity = (id) => {
    return allEntities.find((item) => item.id === id);
  }

  return (
    <nav className="navbar navbar-light bg-black">
      <div className="container d-flex justify-content-between">
        <a href="/" className="navbar-brand">
          <img
            src="https://www.pngall.com/wp-content/uploads/13/Elden-Ring-Logo-PNG-Photo.png" alt="logo" width="200"
          />
        </a>
        <div className="dropdown">
          <button
            className="btn bg-accent dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            data-bs-auto-close="false"
            aria-expanded="false"
          >
            <span className="me-2">Favorites</span>
            <span className="favorite-counter me-2">{favorites.length}</span>
          </button>
          <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuClickable">
            {favorites.length > 0 &&
              <>
                {favorites.map((item, index) => {
                  const entity = getEntity(item);
                  return entity ? (
                    <div className="d-flex justify-content-between dropdown-item" key={index}>
                      <Link to={`/details/${entity.id}`} className="me-4 text-decoration-none text-dark">{entity.name}</Link>
                      <span className="trash" onClick={() => actions.deleteItem(item)}>
                        <FontAwesomeIcon icon={faTrashCan} />
                      </span>
                    </div>
                  ) : null;
                })}
              </>
            }
            {!favorites.length &&
              <div className="d-flex justify-content-center dropdown-item">
                You have no favorites selected
              </div>
            }
          </div>
        </div>
      </div>
    </nav>
  );
};
