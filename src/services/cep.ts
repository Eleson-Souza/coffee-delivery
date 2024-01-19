import { apiCep } from "./api";

interface Address {
  cep?: string;
  logradouro?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
  erro?: boolean;
}

export const getAddressByCep = async (cep: string): Promise<Address> => {
  try {
    const response = await apiCep.get<Address>(`${cep}/json`);

    return response.data;
  } catch (err) {
    console.error(err);
    return { erro: true };
  }
};
