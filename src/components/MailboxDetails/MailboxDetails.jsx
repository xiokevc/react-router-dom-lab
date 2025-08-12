import React from 'react';
import { useParams } from 'react-router-dom';

const MailboxDetails = ({ mailboxes, letters }) => {
  const { mailboxId } = useParams();
  const mailbox = mailboxes.find(mb => mb._id === Number(mailboxId));
  const selectedLetters = letters.filter(
    (letter) => letter.mailboxId === Number(mailboxId)
  );

  if (!mailbox) return <p>Mailbox Not Found!</p>;

  return (
    <div>
      <h2>Mailbox #{mailbox._id}</h2>
      <p><strong>Owner:</strong> {mailbox.boxOwner}</p>
      <p><strong>Size:</strong> {mailbox.boxSize}</p>

      <h3>Letters</h3>
      {selectedLetters.length === 0 ? (
        <p>No letters yet.</p>
      ) : (
        <ul>
          {selectedLetters.map((letter, index) => (
            <li key={index}>
              <strong>To:</strong> {letter.recipient}<br />
              <strong>Message:</strong> {letter.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MailboxDetails;
