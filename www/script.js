document.getElementById('brandSelect').addEventListener('change', function () {
  const selectedBrand = this.value;
  const cars = document.querySelectorAll('.car');

  cars.forEach(car => {
    if (selectedBrand === 'all' || car.dataset.brand === selectedBrand) {
      car.style.display = 'block';
    } else {
      car.style.display = 'none';
    }
  });
});
