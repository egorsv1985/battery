const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item__header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    const currentlyActiveAccordionItemHeader = document.querySelector(
      ".accordion-item__header.active"
    );
    if (
      currentlyActiveAccordionItemHeader &&
      currentlyActiveAccordionItemHeader !== accordionItemHeader
    ) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

const batteryItemHeaders = document.querySelectorAll(
  ".battery-list__header"
);

batteryItemHeaders.forEach((batteryItemHeader) => {
  batteryItemHeader.addEventListener("click", (event) => {
    const currentlyActiveBatteryItemHeader = document.querySelector(
      ".battery-list__header.active"
    );
    if (
      currentlyActiveBatteryItemHeader &&
      currentlyActiveBatteryItemHeader !== batteryItemHeader
    ) {
      currentlyActiveBatteryItemHeader.classList.toggle("active");
      currentlyActiveBatteryItemHeader.nextElementSibling.style.maxHeight = 0;
    }
    batteryItemHeader.classList.toggle("active");
    const batteryItemBody = batteryItemHeader.nextElementSibling;
    if (batteryItemHeader.classList.contains("active")) {
      batteryItemBody.style.maxHeight = batteryItemBody.scrollHeight + "px";
    } else {
      batteryItemBody.style.maxHeight = 0;
    }
  });
});
