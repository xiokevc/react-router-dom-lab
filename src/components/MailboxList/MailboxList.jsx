import React from 'react';
import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes }) => {
  if (mailboxes.length === 0) {
    return <p>No mailboxes yet. Add one!</p>;
  }

  return (
    <div>
      <h2>All Mailboxes</h2>
      <ul>
        {mailboxes.map((mailbox) => (
          <li key={mailbox._id}>
            <Link to={`/mailboxes/${mailbox._id}`}>
              Mailbox #{mailbox._id} - {mailbox.boxOwner}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MailboxList;

