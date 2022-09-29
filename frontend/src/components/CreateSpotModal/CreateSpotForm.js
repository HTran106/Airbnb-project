import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { createAReview } from "../../store/reviews";
import ModalHomePreviewComponent from './ModalHomePreviewComponent';
import './CreateSpot.css'


function CreateSpotForm({ setShowModal }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');
    const [price, setPrice] = useState('');
    const [image1, setImage1] = useState('');
    const [image2, setImage2] = useState('');
    const [image3, setImage3] = useState('');
    const [image4, setImage4] = useState('');
    const [image5, setImage5] = useState('');
    const [image6, setImage6] = useState('');

    const closeModal = e => {
        setShowModal(false)
    }


    return (
        <>
            <form className="create-spot-container">
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
                <label className="create-spot-label">Image Url (for more exposure, please add 6 images)</label>
                <input
                    className="create-spot-input"
                    type="text"
                    value={image1}
                    onChange={(e) => setImage1(e.target.value)}
                    required
                />
                <input
                    className="create-spot-input"
                    type="text"
                    value={image2}
                    onChange={(e) => setImage2(e.target.value)}
                    required
                />
                <input
                    className="create-spot-input"
                    type="text"
                    value={image3}
                    onChange={(e) => setImage3(e.target.value)}
                    required
                />
                <input
                    className="create-spot-input"
                    type="text"
                    value={image4}
                    onChange={(e) => setImage4(e.target.value)}
                    required
                />
                <input
                    className="create-spot-input"
                    type="text"
                    value={image5}
                    onChange={(e) => setImage5(e.target.value)}
                    required
                />
                <input
                    className="create-spot-input"
                    type="text"
                    value={image6}
                    onChange={(e) => setImage6(e.target.value)}
                    required
                />
                <div className="create-spot-button-container">
                    <button onClick={closeModal} className="create-spot-cancel">Cancel</button>
                    <button type='submit' className="create-spot-button">Host Spot</button>
                </div>
            </form>
            <ModalHomePreviewComponent />
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
