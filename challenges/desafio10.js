db.produtos.find(
    { "valoresNutricionais.3.percentual": { $gt: 30, $lte: 40 } }, { _id: 0, nome: 1 },
  );