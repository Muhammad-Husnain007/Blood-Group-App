import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getDatabase, ref, onValue } from 'firebase/database';
import { push } from '../Screen/firebase.configuration';
import style from './data.module.css';
import maleIcon from '../assests/male.png';
import femaleIcon from '../assests/female.png';

const db = getDatabase(push);

const DonorData = () => {
    const location = useLocation();
    const donorGender = location.state ? location.state.donorGender : null;
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            const donorRef = ref(db, 'blood/user/donor');
            onValue(donorRef, (snapshot) => {
                const donors = snapshot.val();
                if (donors) {
                    const donorArray = Object.keys(donors).map((key) => ({
                        id: key,
                        ...donors[key],
                    }));

                    // Filter duplicates by name
                    const filteredDonorArray = donorArray.filter((donor, index, self) => {
                        return index === self.findIndex((t) => t.name === donor.name);
                    });

                    setCards(filteredDonorArray);
                }
            });
        };

        fetchData();
    }, []);

    return (
        <div className={style.mainCard}>
         
            {cards.map((donor) => {
                if (donor.gender === donorGender) {
                    return (
                        <div className={style.cards} key={donor.id}>
                            <div className={style.card}>
                                {donor.gender === 'Male' ? (
                                    <img className={style.maleIcon} src={maleIcon} alt="Male" />
                                ) : (
                                    <img className={style.femaleIcon} src={femaleIcon} alt="Female" />
                                )}
                                <div className={style.data}>
                                <p>
                                    <strong>Name: </strong> {donor.name}
                                </p>
                                <p>
                                    <strong>Email: </strong> {donor.email}
                                </p>
                                <p>
                                    <strong>Blood Group: </strong> {donor.bloodgroup}
                                </p>
                                <p>
                                    <strong>Contact Number: </strong> {donor.number}
                                </p>
                                <p>
                                    <strong>Address: </strong> {donor.address}
                                </p>
                                <p>
                                    <strong>Gender: </strong> {donor.gender}
                                </p>
                                </div>
                            </div>
                        </div>
                    );
                } else {
                    return null;
                }
            })}
        </div>
    );
};

export default DonorData;
