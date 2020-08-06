(function() {
  const flexDirectionClasses = [
    "flex-direction-row",
    "flex-direction-row-reverse",
    "flex-direction-column",
    "flex-direction-column-reverse"
  ];

  const justifyContentClasses = [
    "justify-content-flex-start",
    "justify-content-flex-end",
    "justify-content-center",
    "justify-content-space-around",
    "justify-content-space-between"
  ];

  const alignItemsClasses = [
    "align-items-flex-start",
    "align-items-flex-end",
    "align-items-center",
    "align-items-stretch"
  ];

  const elements = {
    flexContainer: document.querySelector(".flex-container"),
    flexDirectionButtons: document.querySelectorAll(".flex-direction-button"),
    justifyContentButtons: document.querySelectorAll(".justify-content-button"),
    alignItemsButtons: document.querySelectorAll(".align-items-button")
  };

  function changeActiveButton(buttons, selectedButton) {
    buttons.forEach(button => {
      button.classList.remove("active");
    });
    selectedButton.classList.add("active");
  }

  function handleContainerClassChange(classes, selectedClass) {
    const { flexContainer } = elements;
    flexContainer.classList.remove(...classes);
    flexContainer.classList.add(selectedClass);
  }

  function flexContainerHasClass(value) {
    elements.flexContainer.classList.contains(value);
  }

  function getButtonAndValueFromEvent(event) {
    return {
      button: event.target,
      value: event.target.dataset.value
    };
  }

  function handleFlexDirectionChange(event) {
    const { button, value } = getButtonAndValueFromEvent(event);

    if (!flexContainerHasClass(value)) {
      changeActiveButton(elements.flexDirectionButtons, button);
      handleContainerClassChange(flexDirectionClasses, value);
    }
  }

  function handleJustifyContentChange(event) {
    const { button, value } = getButtonAndValueFromEvent(event);

    if (!flexContainerHasClass(value)) {
      changeActiveButton(elements.justifyContentButtons, button);
      handleContainerClassChange(justifyContentClasses, value);
    }
  }

  function handleAlignItemsChange(event) {
    const { button, value } = getButtonAndValueFromEvent(event);

    if (!flexContainerHasClass(value)) {
      changeActiveButton(elements.alignItemsButtons, button);
      handleContainerClassChange(alignItemsClasses, value);
    }
  }

  function init() {
    elements.flexDirectionButtons.forEach(button => {
      button.addEventListener("click", handleFlexDirectionChange);
    });

    elements.justifyContentButtons.forEach(button => {
      button.addEventListener("click", handleJustifyContentChange);
    });

    elements.alignItemsButtons.forEach(button => {
      button.addEventListener("click", handleAlignItemsChange);
    });
  }

  init();
})();
