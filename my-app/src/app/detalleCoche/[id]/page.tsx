import { Auto } from '@/types/auto';
import { notFound } from 'next/navigation';
import DetalleCocheCliente from './detalleCocheCliente';


export default async function DetalleCoche({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params as { id: string };
  const { id } = resolvedParams;

  const res = await fetch(`http://localhost:4000/api/autos/${id}`);
  if (!res.ok) notFound();

  const data = await res.json();
  const auto: Auto = data.data;

  return <DetalleCocheCliente auto={auto} />;
}