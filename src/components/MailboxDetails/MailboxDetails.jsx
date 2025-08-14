import React from 'react';
import { useParams } from 'react-router-dom';

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();
  const mailbox = mailboxes.find(mb => mb._id === Number(mailboxId));

  if (!mailbox) {
    return <p>Mailbox Not Found!</p>;
  }

  return (
    <div>
      <h2>Mailbox {mailbox._id}</h2>
      <h3>Details</h3>
      <div className="details">
        <p><strong>Boxholder:</strong> {mailbox.boxOwner}</p>
        <p><strong>Box Size:</strong> {mailbox.boxSize}</p>
      </div>
    </div>
  );
};

export default MailboxDetails;



