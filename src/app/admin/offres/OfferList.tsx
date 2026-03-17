'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { deleteJobOffer, upsertJobOffer } from './actions';

type JobOffer = {
  id: string;
  title: string;
  description: string;
  location: string;
  type: string;
  published: boolean;
};

export default function OfferList({ initialOffers }: { initialOffers: JobOffer[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingOffer, setEditingOffer] = useState<JobOffer | null>(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleDelete = async (id: string) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer cette offre ?")) {
      startTransition(async () => {
        await deleteJobOffer(id);
        router.refresh();
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    startTransition(async () => {
      await upsertJobOffer(formData, editingOffer?.id);
      setIsModalOpen(false);
      setEditingOffer(null);
      router.refresh();
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-extrabold mb-1">Offres Actives</h2>
          <p className="text-gray-500">Gérez vos missions ESN et offres de portage.</p>
        </div>
        <button 
          onClick={() => { setEditingOffer(null); setIsModalOpen(true); }}
          className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all shadow-lg"
        >
          <i className="fa-solid fa-plus"></i>
          Nouvelle Offre
        </button>
      </div>

      <div className={`bg-[#111]/50 border border-gray-800 rounded-3xl overflow-hidden shadow-xl transition-opacity ${isPending ? 'opacity-50' : ''}`}>
        <table className="w-full text-left">
          <thead>
            <tr className="bg-[#1a1a1a] border-b border-gray-800">
              <th className="px-6 py-4 text-xs uppercase tracking-widest text-gray-500 font-bold">Offre</th>
              <th className="px-6 py-4 text-xs uppercase tracking-widest text-gray-500 font-bold">Lieu / Type</th>
              <th className="px-6 py-4 text-xs uppercase tracking-widest text-gray-500 font-bold text-center">Status</th>
              <th className="px-6 py-4 text-xs uppercase tracking-widest text-gray-500 font-bold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {initialOffers.map((offer) => (
              <tr key={offer.id} className="hover:bg-white/5 transition-all group">
                <td className="px-6 py-5">
                  <div className="font-bold text-lg group-hover:text-purple-400 transition-colors">{offer.title}</div>
                  <div className="text-sm text-gray-500 truncate max-w-xs">{offer.description.substring(0, 60)}...</div>
                </td>
                <td className="px-6 py-5">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-gray-300">{offer.location}</span>
                    <span className="text-xs text-gray-500">{offer.type}</span>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <div className="flex justify-center">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest border ${
                      offer.published 
                        ? 'bg-green-500/10 text-green-500 border-green-500/20' 
                        : 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                    }`}>
                      {offer.published ? 'Publié' : 'Brouillon'}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-5 text-right space-x-2">
                  <button 
                    onClick={() => { setEditingOffer(offer); setIsModalOpen(true); }}
                    className="p-2 hover:bg-blue-500/20 text-blue-400 rounded-lg transition-all" title="Modifier"
                  >
                    <i className="fa-solid fa-pen"></i>
                  </button>
                  <button 
                    onClick={() => handleDelete(offer.id)}
                    className="p-2 hover:bg-red-500/20 text-red-500 rounded-lg transition-all" title="Supprimer"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#111] border border-gray-800 p-8 rounded-3xl w-full max-w-2xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-purple-400">
              {editingOffer ? "Modifier l'offre" : "Ajouter une offre"}
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 uppercase tracking-wider font-bold">Titre</label>
                  <input name="title" required className="w-full bg-black border border-gray-800 rounded-xl p-3 focus:border-purple-500 outline-none transition-all" defaultValue={editingOffer?.title} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 uppercase tracking-wider font-bold">Lieu</label>
                  <input name="location" required className="w-full bg-black border border-gray-800 rounded-xl p-3 focus:border-purple-500 outline-none transition-all" defaultValue={editingOffer?.location} />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400 uppercase tracking-wider font-bold">Type de Contrat</label>
                <input name="type" required className="w-full bg-black border border-gray-800 rounded-xl p-3 focus:border-purple-500 outline-none transition-all" defaultValue={editingOffer?.type} />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400 uppercase tracking-wider font-bold">Description</label>
                <textarea name="description" required className="w-full bg-black border border-gray-800 rounded-xl p-3 h-32 focus:border-purple-500 outline-none transition-all" defaultValue={editingOffer?.description}></textarea>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" name="published" id="published" defaultChecked={editingOffer?.published ?? true} />
                <label htmlFor="published" className="text-sm text-gray-400">Publier immédiatement</label>
              </div>
              <div className="flex justify-end gap-4 pt-4 border-t border-gray-800">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-6 py-3 bg-gray-800 text-gray-300 rounded-xl hover:bg-gray-700 font-bold">Annuler</button>
                <button type="submit" disabled={isPending} className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-bold disabled:opacity-50">
                  {isPending ? "En cours..." : (editingOffer ? "Mettre à jour" : "Publier")}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
