const defaultSelect = () => {
  const element = document.querySelector('.js-choices');
  const choices = new Choices(element, {
    searchEnabled: false,
    position: 'bottom',
    itemSelectText: '',
    shouldSort: false,
    allowHTML: true,

    classNames: {
      containerOuter: 'header__choices',
      containerInner: 'header__choices__inner',
      input: 'header__choices__input',
      inputCloned: 'header__choices__input--cloned',
      list: 'header__choices__list',
      listItems: 'header__choices__list--multiple',
      listSingle: 'header__choices__list--single',
      listDropdown: 'header__choices__list--dropdown',
      item: 'header__choices__item',
      itemSelectable: 'header__choices__item--selectable',
      itemDisabled: 'header__choices__item--disabled',
      itemChoice: 'header__choices__item--choice',
      placeholder: 'header__choices__placeholder',
      group: 'header__choices__group',
      groupHeading: 'header__choices__heading',
      button: 'header__choices__button',
      activeState: 'is-active',
      focusState: 'is-focused',
      openState: 'is-open',
      disabledState: 'is-disabled',
      highlightedState: 'is-highlighted',
      selectedState: 'is-selected',
      flippedState: 'is-flipped',
      loadingState: 'is-loading',
      noResults: 'has-no-results',
      noChoices: 'has-no-choices'
    },
  });
};

defaultSelect();
