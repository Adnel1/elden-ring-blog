import React, { useState, useEffect } from "react";
import { Context } from "../store/appContext";

import Ammos from "../component/ammos";
import Armors from "../component/armors";
import Ashes from "../component/ashes";
import Bosses from "../component/bosses";
import Classes from "../component/classes";
import Creatures from "../component/creatures";
import Incantations from "../component/incantations";
import Items from "../component/items";
import Locations from "../component/locations";
import NPCS from "../component/npcs";
import Shields from "../component/shields";
import Sorceries from "../component/sorceries";
import Spirits from "../component/spirits";
import Talismans from "../component/talismans";
import Weapons from "../component/weapons";

import "../../styles/home.css";

const tabComponents = {
    ammos: Ammos,
    armors: Armors,
    ashes: Ashes,
    bosses: Bosses,
    classes: Classes,
    creatures: Creatures,
    incantations: Incantations,
    items: Items,
    locations: Locations,
    npcs: NPCS,
    shields: Shields,
    sorceries: Sorceries,
    spirits: Spirits,
    talismans: Talismans,
    weapons: Weapons
};

const HomeGrid = () => {
    const [activeTab, setActiveTab] = useState(() => localStorage.getItem('activeTab') || 'ammos');

    useEffect(() => {
        localStorage.setItem('activeTab', activeTab);
    }, [activeTab]);

    const renderContent = () => {
        const Component = tabComponents[activeTab] || Ammos;
        return <Component />;
    };

    return (
        <div className="container pt-5 pb-5">
            <ul className="nav justify-content-center">
                {Object.keys(tabComponents).map((tab) => (
                    <li className="nav-item" key={tab}>
                        <div
                            className={`tab ${activeTab === tab ? 'tab-active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </div>
                    </li>
                ))}
            </ul>

            <div className="tab-content">
                {renderContent()}
            </div>
        </div>
    );
}

export default HomeGrid;