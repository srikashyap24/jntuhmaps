// script.js

document.getElementById('searchBar').addEventListener('keyup', function() {
    const searchString = this.value.toLowerCase();
    const buildingSections = document.querySelectorAll('.building-list ul');

    buildingSections.forEach(section => {
        let hasVisibleBuildings = false;
        const listItems = section.querySelectorAll('li');

        listItems.forEach(item => {
            const buildingInfo = item.querySelector('.building-info');
            if (buildingInfo) {
                const buildingName = buildingInfo.querySelector('h2').textContent.toLowerCase();
                if (buildingName.includes(searchString)) {
                    item.style.display = ''; // Show matching building
                    hasVisibleBuildings = true;
                } else {
                    item.style.display = 'none'; // Hide non-matching building
                }
            } else {
                item.style.display = 'none'; // Hide empty list items
            }
        });

        // Hide the entire section if no buildings are visible
        section.style.display = hasVisibleBuildings ? '' : 'none';
    });
});
