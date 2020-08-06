export function similar(announcements, detailAnnouncement, max) {
  let filterAnn = announcements.filter((item) =>
    isAnnouncementsSimilar(item, detailAnnouncement)
  );

  return filterAnn.slice(0, max);
}

Set.prototype.intersection = function (setB) {
  var intersection = new Set();
  for (var elem of setB) {
    if (this.has(elem)) {
      intersection.add(elem);
    }
  }
  return intersection;
};

function isStringsSimilar(str1, str2) {
  let str1Arr = str1.split(" ");
  let str2Arr = str2.split(" ");

  let set1 = new Set(str1Arr);
  let set2 = new Set(str2Arr);

  let intersection = set1.intersection(set2);

  return intersection.size !== 0;
}

function isAnnouncementsSimilar(ann1, ann2) {
  return (
    isStringsSimilar(ann1.title, ann2.title) &&
    isStringsSimilar(ann1.description, ann2.description)
  );
}
