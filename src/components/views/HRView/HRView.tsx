import React, { useState } from 'react';

export const HRView = () => {

  const [listSelect, setListSelect] = useState(false);

  return (
    <div className="hr-view">
      <div className="nav">
        <div className="nav__list">
          <button
            className={`nav__list-item ${listSelect ? '' : 'active'}`}
            onClick={() => setListSelect(!listSelect)}
            disabled={!listSelect}
          >
            Dostępni kursanci
          </button>
          <button
            className={`nav__list-item ${listSelect ? 'active' : ''}`}
            onClick={() => setListSelect(!listSelect)}
            disabled={listSelect}
          >
            Do rozmowy
          </button>
        </div>
      </div>
      {listSelect
        ? <h1>Do rozmowy</h1>
        : <h1>Dostępni kursanci</h1>
      }
    </div>
  );
};