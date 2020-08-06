import * as _ from "lodash";

export function similar(announcements, detailAnnouncement, max) {
  let filterAnn = announcements.filter((item) =>
    isAnnouncementsSimilar(item, detailAnnouncement)
  );

  return filterAnn.slice(0, max);
}

function isStringsSimilar(str1, str2) {
  let str1Arr = str1.split(" ");
  let str2Arr = str2.split(" ");

  let intersection = _.intersection(str1Arr, str2Arr);

  return intersection.length !== 0;
}

function isAnnouncementsSimilar(ann1, ann2) {
  return (
    isStringsSimilar(ann1.title, ann2.title) &&
    isStringsSimilar(ann1.description, ann2.description)
  );
}
