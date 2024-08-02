import React from 'react';
import './Sponsor.css';

const Sponsor = () => {
  return (
    <div className="sponsor-container">
      <div className="header">
        <h2 className="title">SPONSORS</h2>
      </div>

      <div className="sponsor-list">
        <div className="sponsor-item platinum">
          <h3 className="subtitle">Platinum</h3>
          <div className="sponsor-logos">
            <img src="/sponsors/dataverse.png" alt="DataverseOS" className="sponsor-logo" />
            <img src="/sponsors/Devfolio.png" alt="Devfolio" className="sponsor-logo" />
            <img src="/sponsors/polygon.png" alt="Polygon" className="sponsor-logo polygon" />
          </div>
        </div>

        <div className="sponsor-item gold">
          <h3 className="subtitle">Gold</h3>
          <div className="sponsor-logos">
            <img src="/sponsors/quil.png" alt="Quillaudits" className="sponsor-logo quill" />
            <img src="/sponsors/hyper.png" alt="Hyper" className="sponsor-logo hyper" />
            <img src="/sponsors/gmc.png" alt="GMC" className="sponsor-logo gmc" />
          </div>
        </div>

        <div className="sponsor-item silver">
          <h3 className="subtitle">Silver</h3>
          <div className="sponsor-logos">
            <img src="/sponsors/filecoin.png" alt="FileCoin" className="sponsor-logo filecoin" />
            <img src="/sponsors/Replit.png" alt="Replit" className="sponsor-logo replit" />
            <img src="/sponsors/solana.png" alt="Solana" className="sponsor-logo" />
          </div>
        </div>

        <div className="sponsor-item bronze">
          <h3 className="subtitle">Bronze</h3>
          <div className="sponsor-logos">
            <img src="/sponsors/intc.png" alt="InterviewCake" className="sponsor-logo" />
            <img src="/sponsors/intb.png" alt="InterviewBuddy" className="sponsor-logo" />
            <img src="/sponsors/axure.png" alt="Axure" className="sponsor-logo axure" />
            <img src="/sponsors/xyz.png" alt="XYZ" className="sponsor-logo xyz" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsor;
