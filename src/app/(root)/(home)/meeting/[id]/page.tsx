import React from "react";

function MeetingWithIDPage({ params }: { params: { id: string } }) {
  return <div>MeetingWithIDPage {params.id}</div>;
}

export default MeetingWithIDPage;
