import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MailboxForm = ({ addBox }) => {
  const [boxOwner, setBoxOwner] = useState('');
  const [boxSize, setBoxSize] = useState('Small');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ boxOwner, boxSize });
    navigate('/mailboxes');
  };

  return (
    <div>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a Boxholder:
          <input
            type="text"
            value={boxOwner}
            onChange={(e) => setBoxOwner(e.target.value)}
            placeholder="Boxholder name"
            required
          />
        </label>
        <label>
          Select a Box Size:
          <select
            value={boxSize}
            onChange={(e) => setBoxSize(e.target.value)}
          >
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MailboxForm;


