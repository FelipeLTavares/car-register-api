import { Carro, CarroFilter, SequelizeFilter, UpdateData } from "../Interfaces";

export function generateFilter1(raw: CarroFilter): SequelizeFilter {
  let filter: SequelizeFilter = {
    placa: [],
    marca: [],
    modelo: [],
    cor: [],
    cambio: [],
    anoModelo: [1950, 2024],
    anoFabricacao: [1950, 2024],
  };

  if (raw.marca) {
    filter.marca?.push(raw.marca.toUpperCase());
  } else {
    delete filter.marca;
  }

  if (raw.modelo) {
    filter.modelo?.push(raw.modelo.toUpperCase());
  } else {
    delete filter.modelo;
  }

  if (raw.cambio) {
    filter.cambio?.push(raw.cambio.toUpperCase());
  } else {
    delete filter.cambio;
  }

  if (raw.placa) {
    filter.placa?.push(raw.placa.toUpperCase());
  } else {
    delete filter.placa;
  }

  if (raw.cor) {
    filter.cor?.push(raw.cor.toUpperCase());
  } else {
    delete filter.cor;
  }

  return filter;
}

export function generateFilter2(raw: CarroFilter): SequelizeFilter {
  let filter2: SequelizeFilter = {
    anoModelo: [1950, 2024],
    anoFabricacao: [1950, 2024],
  };

  if (raw.anoModelo.de) {
    filter2.anoModelo![0] = Number(raw.anoModelo.de);
  }

  if (raw.anoModelo.ate) {
    filter2.anoModelo![1] = Number(raw.anoModelo.ate);
  }

  if (raw.anoFabricacao.de) {
    filter2.anoFabricacao![0] = Number(raw.anoFabricacao.de);
  }

  if (raw.anoFabricacao.ate) {
    filter2.anoFabricacao![1] = Number(raw.anoFabricacao.ate);
  }

  return filter2;
}

//Update
export function prepareUpdateData(raw: UpdateData): UpdateData {
  let filter: UpdateData = {};

  if (raw.marca) {
    filter.marca = raw.marca.toUpperCase();
  } else {
    delete filter.marca;
  }

  if (raw.modelo) {
    filter.modelo = raw.modelo.toUpperCase();
  } else {
    delete filter.modelo;
  }

  if (raw.cambio) {
    filter.cambio = raw.cambio.toUpperCase();
  } else {
    delete filter.cambio;
  }

  if (raw.placa) {
    filter.placa = raw.placa.toUpperCase();
  } else {
    delete filter.placa;
  }

  if (raw.cor) {
    filter.cor = raw.cor.toUpperCase();
  } else {
    delete filter.cor;
  }

  if (raw.anoFabricacao) {
    filter.anoFabricacao = Number(raw.anoFabricacao);
  } else {
    delete filter.anoFabricacao;
  }

  if (raw.anoModelo) {
    filter.anoModelo = Number(raw.anoModelo);
  } else {
    delete filter.anoModelo;
  }

  return filter;
}

export const PrepareCreateData = (rawData: Carro) => {
  let readyData: any = {};

  for (const prop in rawData) {
    console.log(typeof prop);
    const propertyValue = rawData[prop as keyof Carro];
    if (typeof propertyValue === "string") {
      readyData[prop] = propertyValue.toUpperCase();
      continue;
    }
    readyData[prop] = propertyValue;
  }

  return readyData;
};
