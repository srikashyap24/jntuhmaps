// script.js

document.getElementById('searchBar').addEventListener('keyup', function() {
    const searchString = this.value.toLowerCase();
    const buildingSections = document.querySelectorAll('.building-list ul');

    buildingSections.forEach(section => {
        let hasVisibleBuildings = false;
        const buildings = section.querySelectorAll('.building-info');

        buildings.forEach(building => {
            const buildingName = building.querySelector('h2').textContent.toLowerCase();
            if (buildingName.includes(searchString)) {
                building.parentElement.style.display = ''; // Show matching buildings
                hasVisibleBuildings = true;
            } else {
                building.parentElement.style.display = 'none'; // Hide non-matching buildings
            }
        });

        // Hide the entire section if no buildings are visible
        section.parentElement.style.display = hasVisibleBuildings ? '' : 'none';
    });
});
