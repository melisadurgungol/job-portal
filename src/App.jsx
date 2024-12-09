
import React, { useState } from 'react';
import './App.css';
import IlanListesi from './components/IlanListesi.jsx';


function App() {
  const [anahtarKelime, setAnahtarKelime] = useState('');
  const [konum, setKonum] = useState('');
  const [kategori, setKategori] = useState('');

  return (
    <div className="App">
      <h1>İş İlanı Portalı</h1>
      <div className='header'>
        <div className="arama_kutusu">
          <input 
            type="text" 
            placeholder="İş İlanı Portalı"
            value={anahtarKelime}
            onChange={(e) => setAnahtarKelime(e.target.value)} 
          />
        </div>
        <div className='filtreler'>
          <input 
            type="text"
            placeholder="Konum Ara"
            value={konum}
            onChange={(e) => setKonum(e.target.value)} 
          />
          <select 
            value={kategori} 
            onChange={(e) => setKategori(e.target.value)}
          >
            <option value="">Tüm Kategoriler</option>
            <option value="Yazılım Geliştirme">Yazılım Geliştirme</option>
            <option value="Mobil Geliştirme">Mobil Geliştirme</option>
            <option value="Veri Bilimi">Veri Bilimi</option>
            <option value="Siber Güvenlik">Siber Güvenlik</option>
            <option value="Bulut Bilişim">Bulut Bilişim</option>
            <option value="Yapay Zeka">Yapay Zeka</option>
            <option value="Web Geliştirme">Web Geliştirme</option>
            <option value="Tasarım">Tasarım</option>
            <option value="Proje Yönetimi">Proje Yönetimi</option>
            <option value="DevOps">DevOps</option>
          </select>
        </div>
      </div>
      
      <IlanListesi anahtarKelime={anahtarKelime} konum={konum} kategori={kategori} />
    </div>
  );
}

export default App;
