'use client';

import { useState } from 'react';
import SidebarFilters from '../components/SidebarFilters';
import VehicleInfo from '../components/VehicleInfo';
import { getVehicleDetails } from '../lib/api';

export default function HomePage() {
  const [vehicleInfo, setVehicleInfo] = useState(null);
  const [error, setError] = useState('');

  async function handleSelection(brand: string, model: string, year: string) {
    try {
      setError('');
      const data = await getVehicleDetails(brand, model, year);
      setVehicleInfo(data);
    } catch (e) {
      setError('Erro ao buscar dados do veículo.');
      setVehicleInfo(null);
    }
  }

  return (
    <div className="flex w-full gap-6">
      {/* Menu lateral (coluna esquerda) */}
      <aside className="w-1/3">
        <SidebarFilters onSelection={handleSelection} />
      </aside>

      {/* Resultado (coluna direita) */}
      <section className="w-2/3">
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {vehicleInfo && <VehicleInfo data={vehicleInfo} />}
      </section>
    </div>
  );
}
