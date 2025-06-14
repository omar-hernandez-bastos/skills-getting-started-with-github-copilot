<div className="activity-card">
  {/* ...existing card content... */}
  {/* Participants Section */}
  <div className="participants-section" style={{
    marginTop: '1rem',
    padding: '0.75rem 1rem',
    background: '#f3f4f6',
    borderRadius: '8px',
    boxShadow: '0 1px 4px rgba(0,0,0,0.04)'
  }}>
    <h4 style={{
      margin: '0 0 0.5rem 0',
      color: '#2563eb',
      fontWeight: 600,
      letterSpacing: '0.5px'
    }}>Participants</h4>
    <ul style={{
      paddingLeft: '1.25rem',
      margin: 0,
      listStyleType: 'disc'
    }}>
      {participants && participants.length > 0 ? (
        participants.map((name, idx) => (
          <li key={idx} style={{
            marginBottom: '0.25rem',
            color: '#374151',
            fontWeight: 500
          }}>
            {name}
          </li>
        ))
      ) : (
        <li style={{
          color: '#9ca3af',
          fontStyle: 'italic'
        }}>No participants yet</li>
      )}
    </ul>
  </div>
  {/* ...existing card content... */}
</div>