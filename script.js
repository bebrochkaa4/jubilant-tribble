const addContactBtn = document.getElementById("addContact");
const userAgent = navigator.userAgent || navigator.vendor || window.opera;

if (/iPad|iPhone|iPod/.test(userAgent)) {
  addContactBtn.href = "contact.vcf";
} else if (/Android/.test(userAgent)) {
  addContactBtn.href = "tel:+79274272524";
} else {
  addContactBtn.href = "contact.vcf";
}