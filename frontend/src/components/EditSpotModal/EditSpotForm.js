import React, { useState } from "react";
import { useDispatch } from "react-redux";
import './EditSpot.css'
import { editASpot } from "../../store/spots";
import validator from 'validator'




function EditSpotForm({ setShowModal, spot }) {
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


    const handleSubmit = e => {
        e.preventDefault();
        if (lat) {
            if (!validator.isFloat(`${lat}`)) {
                alert('Please enter a valid latitude')
                return
            }
        }

        if (lng) {
            if (!validator.isFloat(`${lng}`)) {
                alert('Please enter a valid longitude')
                return
            }
        }

        if (price) {
            if (!validator.isInt(`${price}`)) {
                alert('Please enter a valid price')
                return
            }
        }

        const spotData = {
            id: spot?.id,
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
        dispatch(editASpot(spotData))
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
                />
                <label className="create-spot-label">Address</label>
                <input
                    className="create-spot-input"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <label className="create-spot-label">City</label>
                <input
                    className="create-spot-input"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <label className="create-spot-label">State</label>
                <input
                    className="create-spot-input"
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                />
                <label className="create-spot-label">Country</label>
                <input
                    className="create-spot-input"
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                />
                <label className="create-spot-label">Lat</label>
                <input
                    className="create-spot-input"
                    type="text"
                    value={lat}
                    onChange={(e) => setLat(e.target.value)}
                />
                <label className="create-spot-label">Lng</label>
                <input
                    className="create-spot-input"
                    type="text"
                    value={lng}
                    onChange={(e) => setLng(e.target.value)}
                />
                <label className="create-spot-label">Description</label>
                <textarea
                    style={{ height: "100px" }}
                    className="create-spot-input"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <label className="create-spot-label">Price</label>
                <input
                    className="create-spot-input"
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <div className="create-spot-button-container">
                    <button onClick={closeModal} className="create-spot-cancel">Cancel</button>
                    <button type='submit' className="create-spot-button">Confirm</button>
                </div>
            </form>
        </>
    )
}

export default EditSpotForm;
