function addContact() {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Булат Хакимов
TEL:+79274272524
END:VCARD`;

    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);

    window.location.href = url;
}