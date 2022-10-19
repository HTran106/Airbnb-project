import React, { useState, useEffect } from "react";
import ModalHomePreviewComponent from './ModalHomePreviewComponent';
import { useDispatch } from "react-redux";
import './CreateSpot.css'
import { createNewSpot } from "../../store/spots";
import validator from 'validator'
import { randomLatLng } from "../Navigation/CreateSpotModal/CreateSpotForm";




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
    const [image1, setImage1] = useState('');
    const [image2, setImage2] = useState('');
    const [image3, setImage3] = useState('');
    const [image4, setImage4] = useState('');
    const [image5, setImage5] = useState('');
    const [image6, setImage6] = useState('');
    const data = [
        name,
        description,
        address,
        city, state,
        country,
        lat,
        lng,
        price,
        image1,
        image2,
        image3,
        image4,
        image5,
        image6
    ]

    useEffect(() => {
        const random = Math.floor(Math.random() * 6)
        setLat(randomLatLng[random][0].toFixed(2))
        setLng(randomLatLng[random][1].toFixed(2))
    }, [])

    const closeModal = e => {
        setShowModal(false)
    }


    const handleSubmit = async e => {
        e.preventDefault();
        if (!validator.isFloat(`${lat}`)) {
            alert('Please enter a valid latitude')
            return
        }

        if (!validator.isFloat(`${lng}`)) {
            alert('Please enter a valid longitude')
            return
        }

        if (!validator.isInt(`${price}`)) {
            alert('Please enter a valid price')
            return
        }

        if (!validator.isURL(`${image1}`) || !validator.isURL(`${image2}`) || !validator.isURL(`${image3}`) || !validator.isURL(`${image4}`) || !validator.isURL(`${image5}`) || !validator.isURL(`${image6}`)) {
            alert('Please enter a valid URL')
            return
        }

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
        const images = [image1, image2, image3, image4, image5, image6]
        dispatch(createNewSpot(spotData, images))
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
                <label className="create-spot-label">Price</label>
                <input
                    className="create-spot-input"
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
                <label className="create-spot-label">Description</label>
                <textarea
                    style={{ minHeight: '75px' }}
                    className="create-spot-input"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
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
            <ModalHomePreviewComponent data={data} />
        </>
    )
}

export default CreateSpotForm;
