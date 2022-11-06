//Types
export type Cambio = "MANUAL" | "AUTOMATICO" | "";

//Interface
export interface Carro {
  placa: string;
  marca: string;
  modelo: string;
  cor: string;
  anoFabricacao: number;
  anoModelo: number;
  cambio: Cambio;
}

export interface CarroFilter {
  placa?: string;
  marca?: string;
  modelo?: string;
  cor?: string;
  cambio?: string;
  anoModelo: {
    de?: number;
    ate?: number;
  };
  anoFabricacao: {
    de?: number;
    ate?: number;
  };
}

export interface SequelizeFilter {
  placa?: string[];
  marca?: string[];
  modelo?: string[];
  cor?: string[];
  cambio?: string[];
  anoModelo?: number[];
  anoFabricacao?: number[];
}

export interface UpdateData {
  placa?: string;
  marca?: string;
  modelo?: string;
  cor?: string;
  cambio?: string;
  anoModelo?: number;
  anoFabricacao?: number;
}
