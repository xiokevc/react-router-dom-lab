import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LetterForm = ({ mailboxes, addLetter }) => {
  const [mailboxId, setMailboxId] = useState('');
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addLetter({ mailboxId: Number(mailboxId), recipient, message });
    navigate(`/mailboxes/${mailboxId}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Send To Mailbox:
        <select
          value={mailboxId}
          onChange={(e) => setMailboxId(e.target.value)}
          required
        >
          <option value="">-- Select Mailbox --</option>
          {mailboxes.map((mailbox) => (
            <option key={mailbox._id} value={mailbox._id}>
              Mailbox #{mailbox._id} ({mailbox.boxOwner})
            </option>
          ))}
        </select>
      </label>
      <label>
        Recipient:
        <input
          type="text"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          required
        />
      </label>
      <label>
        Message:
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </label>
      <button type="submit">Send Letter</button>
    </form>
  );
};

export default LetterForm;
