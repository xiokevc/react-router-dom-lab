import React from 'react';
import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes }) => {
  if (mailboxes.length === 0) {
    return <p>No mailboxes yet. Add one!</p>;
  }

  return (
    <div>
      <h2>Mailbox List</h2>
      <div className="mailbox-list">
        {mailboxes.map((mailbox) => (
          <Link
            key={mailbox._id}
            to={`/mailboxes/${mailbox._id}`}
            className="mail-box"
          >
            #{mailbox._id}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MailboxList;



