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
            <img src=".\public\sponsors\dataverse.png" alt="DataverseOS" className="sponsor-logo" />
            <img src="https://live-the-code-2.netlify.app/images/clients/Devfolio.svg" alt="Devfolio" className="sponsor-logo" />
            <img src="https://live-the-code-2.netlify.app/images/clients/polygon.svg" alt="Polygon" className="sponsor-logo" />
          </div>
        </div>

        <div className="sponsor-item gold">
          <h3 className="subtitle">Gold</h3>
          <div className="sponsor-logos">
            <img src="https://live-the-code-2.netlify.app/images/clients/quil.png" alt="Quillaudits" className="sponsor-logo" />
            <img src="https://live-the-code-2.netlify.app/images/clients/hyper.png" alt="Hyper" className="sponsor-logo" />
            <img src="https://live-the-code-2.netlify.app/images/clients/gmc.png" alt="GMC" className="sponsor-logo" />
          </div>
        </div>

        <div className="sponsor-item silver">
          <h3 className="subtitle">Silver</h3>
          <div className="sponsor-logos">
            <img src="https://live-the-code-2.netlify.app/images/clients/filecoin.svg" alt="FileCoin" className="sponsor-logo" />
            <img src="https://live-the-code-2.netlify.app/images/clients/Replit.svg" alt="Replit" className="sponsor-logo" />
            <img src="https://live-the-code-2.netlify.app/images/clients/solana.svg" alt="Solana" className="sponsor-logo" />
          </div>
        </div>

        <div className="sponsor-item bronze">
          <h3 className="subtitle">Bronze</h3>
          <div className="sponsor-logos">
            <img src="https://live-the-code-2.netlify.app/images/clients/intc.png" alt="InterviewCake" className="sponsor-logo" />
            <img src="https://live-the-code-2.netlify.app/images/clients/intb.png" alt="InterviewBuddy" className="sponsor-logo" />
            <img src="https://live-the-code-2.netlify.app/images/clients/axure.svg" alt="Axure" className="sponsor-logo" />
            <img src="https://live-the-code-2.netlify.app/images/clients/xyz.png" alt="XYZ" className="sponsor-logo" />
            <img src="https://live-the-code-2.netlify.app/images/clients/verbwire.svg" alt="Verbwire" className="sponsor-logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsor;
