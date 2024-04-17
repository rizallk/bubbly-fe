const rupiahFormat = (number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: number % 1 === 0 ? 0 : 2, // Menentukan minimum digit di belakang koma
    maximumFractionDigits: 2, // Maksimum digit di belakang koma
  }).format(number);
};

export { rupiahFormat };
