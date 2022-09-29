import React, { useState, useEffect } from "react";
import ModalHomePreviewComponent from './ModalHomePreviewComponent';
import { useDispatch, useSelector } from "react-redux";
import './EditSpot.css'
import { createNewSpot, fetchAllSpots } from "../../store/spots";




function CreateSpotForm({ setShowModal }) {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');
    const [price, setPrice] = useState('');

    const closeModal = e => {
        setShowModal(false)
    }


    const handleSubmit = async e => {
        e.preventDefault();
        const spotData = {
            name,
            description,
            address,
            city,
            state,
            country,
            lat,
            lng,
            price
        }
        setShowModal(false)
    }


    return (
        <>
            <form onSubmit={handleSubmit} className="create-spot-container">
                <label className="create-spot-label">Name
                </label>
                <input
                    className="create-spot-input"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <label className="create-spot-label">Address</label>
                <input
                    className="create-spot-input"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />
                <label className="create-spot-label">City</label>
                <input
                    className="create-spot-input"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                />
                <label className="create-spot-label">State</label>
                <input
                    className="create-spot-input"
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                />
                <label className="create-spot-label">Country</label>
                <input
                    className="create-spot-input"
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                />
                <label className="create-spot-label">Lat</label>
                <input
                    className="create-spot-input"
                    type="text"
                    value={lat}
                    onChange={(e) => setLat(e.target.value)}
                    required
                />
                <label className="create-spot-label">Lng</label>
                <input
                    className="create-spot-input"
                    type="text"
                    value={lng}
                    onChange={(e) => setLng(e.target.value)}
                    required
                />
                <label className="create-spot-label">Description</label>
                <input
                    className="create-spot-input"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <label className="create-spot-label">Price</label>
                <input
                    className="create-spot-input"
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
                <div className="create-spot-button-container">
                    <button onClick={closeModal} className="create-spot-cancel">Cancel</button>
                    <button type='submit' className="create-spot-button">Confirm</button>
                </div>
            </form>
        </>
    )
}

export default CreateSpotForm;

// userId: user.id,
//     name,
//     address,
//     city,
//     state,
//     country,
//     lat,
//     lng,
//     description,
//     price,
//     squareFt
