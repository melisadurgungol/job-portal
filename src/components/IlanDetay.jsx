import React from 'react';

const IlanDetay = ({ ilan, onClose }) => {
    return (
        <div className="ilan-detay">
            <button onClick={onClose}>Kapat</button>
            <h2>{ilan.job_title}</h2>
            <img src={ilan.job_image_url} alt={ilan.job_title} />
            <div className="detayli-aciklama">{ilan.job_description}</div>
            <div className="detayli-lokasyon">Konum: {ilan.location}</div>
            <div className="detayli-kategori">Kategori: {ilan.category}</div>
        </div>
    );
};

export default IlanDetay;