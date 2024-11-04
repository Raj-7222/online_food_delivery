document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('bookingForm');

    // Handle checkbox enable/disable quantity fields
    document.querySelectorAll('input[type="checkbox"]').forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            const qtyInput = this.parentElement.nextElementSibling;
            if (this.checked) {
                qtyInput.disabled = false;
            } else {
                qtyInput.disabled = true;
                qtyInput.value = ''; // Reset quantity if unchecked
            }
        });
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const time = form.time.value;

        if (!name || !email || !date || !time) {
            alert('Please fill in all fields.');
            return;
        }

        // Collect selected food items and their quantities
        const selectedItems = [];
        document.querySelectorAll('input[type="checkbox"]:checked').forEach(function (checkbox) {
            const foodName = checkbox.value;
            const quantity = checkbox.parentElement.nextElementSibling.value;
            if (quantity) {
                selectedItems.push({ foodName, quantity });
            }
        });

        if (selectedItems.length === 0) {
            alert('Please select at least one food item and quantity.');
            return;
        }

        alert(`Booking confirmed!\n\nName: ${name}\nE-mail: ${email}\nDate: ${date}\nTime: ${time}\n\nOrder Details:\n${selectedItems.map(item => `${item.foodName}: ${item.quantity}`).join('\n')}`);

        form.reset();

        // Disable all quantity inputs after form reset
        document.querySelectorAll('input[type="number"]').forEach(input => input.disabled = true);
    });
});
