'use client';

import { useState } from 'react';

const products = [
  { name: 'Riz (1kg)', prices: { 'Gounghin': 500, 'Dapoya': 550, 'Ouaga 2000': 600 } },
  { name: 'Huile (1L)', prices: { 'Gounghin': 1000, 'Dapoya': 1100, 'Ouaga 2000': 1200 } },
  { name: 'Tomates (1kg)', prices: { 'Gounghin': 300, 'Dapoya': 350, 'Ouaga 2000': 400 } },
  { name: 'Pain', prices: { 'Gounghin': 150, 'Dapoya': 150, 'Ouaga 2000': 200 } },
];

export default function PriceComparison() {
  const [selectedProduct, setSelectedProduct] = useState(products[0].name);

  const product = products.find(p => p.name === selectedProduct);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-green-600">Comparaison des prix à Ouagadougou</h2>
      <div className="mb-4">
        <label htmlFor="product" className="block mb-2 font-medium">Choisissez un produit :</label>
        <select
          id="product"
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
          className="w-full p-2 border rounded"
        >
          {products.map(p => (
            <option key={p.name} value={p.name}>{p.name}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {Object.entries(product.prices).map(([zone, price]) => (
          <div key={zone} className="text-center p-2 bg-gray-100 rounded">
            <h3 className="font-semibold">{zone}</h3>
            <p>{price} FCFA</p>
          </div>
        ))}
      </div>
    </div>
  );
}