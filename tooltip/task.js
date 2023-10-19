window.onload = function() {
    const tooltipElements = Array.from(document.getElementsByClassName('has-tooltip'));

    let tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    document.body.append(tooltip);

    tooltipElements.forEach(element => {
        element.addEventListener('click', event => {
            event.preventDefault();
            if (tooltip.classList.contains('tooltip_active') && tooltip.innerText === element.title) {
                tooltip.classList.remove('tooltip_active');
            } else {
                tooltip.innerHTML = element.title;
                let coords = element.getBoundingClientRect();

                let left = coords.left + (element.offsetWidth - tooltip.offsetWidth) / 2;
                if (left < 0) left = 0;

                let top = coords.top - tooltip.offsetHeight - 5;
                if (top < 0) {
                    top = coords.top + element.offsetHeight + 5;
                }

                tooltip.style.left = `${left}px`;
                tooltip.style.top = `${top}px`;
                tooltip.classList.add('tooltip_active');
            }
        });
    });
};