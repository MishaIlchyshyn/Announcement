import React from "react";

import Announcement from "../../components/Announcement/Announcement";

const ListAnnouncement = () => {
  const List = [
    {
      title: "first announcement",
      description: "first announcement description",
      createDate: "25.09.2020",
    },
    {
      title: "first announcement 1",
      description: "first announcement description 1",
      createDate: "25.09.2020",
    },
    {
      title: "first announcement 2",
      description: "first announcement description 2",
      createDate: "25.09.2020",
    },
  ];

  return (
    <div>
      {List.map((annoncement) => {
        return (
          <Announcement
            title={annoncement.title}
            description={annoncement.description}
            date={annoncement.createDate}
          />
        );
      })}
    </div>
  );
};

export default ListAnnouncement;
