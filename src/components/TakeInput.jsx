import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

function TakeInput({ type, setLinkValue }) {
  const [input, setInput] = useState('');

  useEffect(() => {
    setLinkValue(input);
  }, [input, setLinkValue]);

  return (
    <div
      className={`take-input transition-transform transform ${
        type ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      {type === 'whatsapp' && (
        <div className="flex flex-col gap-4">
          <label htmlFor="whatsappNo">Whatsapp No</label>
          <input
            type="text"
            className="outline-none border p-4 rounded-xl"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
        </div>
      )}
      {type === 'website' && (
        <div className="flex flex-col gap-4">
          <label htmlFor="websiteUrl">Website Url</label>
          <input
            type="text"
            className="outline-none border p-4 rounded-xl"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
        </div>
      )}
      {type === 'phone' && (
        <div className="flex flex-col gap-4">
          <label htmlFor="phoneNo">Phone No</label>
          <input
            type="text"
            className="outline-none border p-4 rounded-xl"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
        </div>
      )}
    </div>
  );
}

TakeInput.propTypes = {
  type: PropTypes.string,
  setLinkValue: PropTypes.func.isRequired,
};

export default TakeInput;
