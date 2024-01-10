export function formatPrice(price: number): string {
  const options: Intl.NumberFormatOptions = {
    currency: "BRL",
    style: "currency",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  };

  return Intl.NumberFormat("pt-BR", options).format(price);
}
