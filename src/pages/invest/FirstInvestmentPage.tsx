// FirstInvestmentPage — post-onboarding destination
// Route: /invest/first-investment
// Non-transactional. Shows illustrative product cards only.
// Does NOT facilitate real investments.

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, X, AlertTriangle } from 'lucide-react';
import { SproutLogo } from '../../components/SproutLogo';
import { PipMascot } from '../../components/PipMascot';
import { PrimaryButton, SecondaryButton, GhostButton } from '../../components/Buttons';
import { RiskDisclaimer } from '../../components/RiskDisclaimer';
import { ProductPreviewCard } from '../../components/ProductPreviewCard';

const SAMPLE_PRODUCTS = [
  {
    id: 'sample-equity',
    name: 'Sample Large Cap Fund',
    category: 'Equity',
    riskLevel: 'High',
    minInvestment: '₹100',
    note: 'Illustrative only. Not a real fund.',
    description: 'An illustrative equity mutual fund that invests in large, established companies. Equity funds carry higher market risk and may be suitable for investors with a longer time horizon who understand that values can fall significantly.',
  },
  {
    id: 'sample-debt',
    name: 'Sample Short-Term Debt Fund',
    category: 'Debt',
    riskLevel: 'Moderate',
    minInvestment: '₹500',
    note: 'Illustrative only. Not a real fund.',
    description: 'An illustrative debt mutual fund investing in fixed-income instruments. Generally carries lower volatility than equity, but is not risk-free. Interest rate changes and credit events can affect value.',
  },
  {
    id: 'sample-hybrid',
    name: 'Sample Balanced Advantage Fund',
    category: 'Hybrid',
    riskLevel: 'Moderate-High',
    minInvestment: '₹100',
    note: 'Illustrative only. Not a real fund.',
    description: 'An illustrative hybrid fund that adjusts its equity and debt allocation based on market conditions. Carries both equity and debt risks. Suitable for educational demonstration of a multi-asset approach.',
  },
];

function ProductDetailPanel({ product, onClose }: { product: typeof SAMPLE_PRODUCTS[0]; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 flex items-end sm:items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`About ${product.name}`}
    >
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md max-h-[85vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#DDE3DC]">
          <div>
            <span className="text-[11px] font-semibold text-[#5C675F] uppercase tracking-wide">Illustrative · Not real</span>
            <h2 className="text-lg font-bold text-[#18231D]">{product.name}</h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[#F8F7F2] text-[#5C675F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#174D3A]"
            aria-label="Close"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="p-5 space-y-4">
          {/* Demo notice */}
          <div className="flex items-start gap-2 bg-[#FEF8EC] border border-[#F0D89B] rounded-xl p-3">
            <AlertTriangle size={15} className="text-[#7A4A00] flex-shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-[12px] text-[#7A4A00]">
              This is an illustrative product for demonstration purposes. It does not represent a real fund, live NAV, or current availability.
            </p>
          </div>

          <div className="space-y-3 text-[14px] text-[#5C675F] leading-relaxed">
            <p>{product.description}</p>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#F8F7F2] rounded-xl p-3">
                <span className="text-[11px] font-semibold text-[#5C675F] uppercase tracking-wide block mb-1">Category</span>
                <span className="text-[14px] font-semibold text-[#18231D]">{product.category}</span>
              </div>
              <div className="bg-[#F8F7F2] rounded-xl p-3">
                <span className="text-[11px] font-semibold text-[#5C675F] uppercase tracking-wide block mb-1">Illustrative Min.</span>
                <span className="text-[14px] font-semibold text-[#18231D]">{product.minInvestment}</span>
              </div>
            </div>
            <div className="bg-[#FEF2F2] rounded-xl p-3">
              <span className="text-[12px] font-semibold text-[#B42318] block mb-1">Risk: {product.riskLevel}</span>
              <p className="text-[12px] text-[#5C675F]">
                Investment values can rise or fall. You may receive less than the amount you put in. This applies regardless of the risk level indicated.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <p className="text-[12px] text-[#5C675F] italic border-l-2 border-[#DDE3DC] pl-3">
              In a production application, this panel would show real fund details, scheme documents, historical performance context, and a regulated order flow. No investment can be placed from this prototype.
            </p>
          </div>
        </div>

        <div className="p-5 pt-0">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-xl bg-[#F8F7F2] border border-[#DDE3DC] text-[#174D3A] font-semibold hover:bg-[#DCEFE2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#174D3A] min-h-[44px]"
          >
            Back to options
          </button>
        </div>
      </div>
    </div>
  );
}

export function FirstInvestmentPage() {
  const navigate = useNavigate();
  const [showProducts, setShowProducts] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<typeof SAMPLE_PRODUCTS[0] | null>(null);

  const handleBack = () => navigate('/onboarding/verification');

  return (
    <>
      <div className="min-h-screen bg-[#F8F7F2] flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-white border-b border-[#DDE3DC]">
          <div className="max-w-2xl mx-auto w-full px-4 h-14 flex items-center justify-between">
            <button
              onClick={handleBack}
              className="flex items-center gap-1.5 text-[#174D3A] text-sm font-medium min-h-[44px] -ml-2 px-2 hover:bg-[#DCEFE2] rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#174D3A] transition-colors"
              aria-label="Back to verification"
            >
              <ArrowLeft size={18} aria-hidden="true" />
              <span className="sr-only sm:not-sr-only">Back</span>
            </button>
            <SproutLogo className="text-base" />
            <div className="w-11" />
          </div>
        </header>

        {/* Risk disclaimer — always visible at top */}
        <RiskDisclaimer />

        {/* Content */}
        <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-8">
          {/* Heading */}
          <div className="flex items-start gap-4 mb-6">
            <PipMascot state={showProducts ? 'learning' : 'success'} size={64} aria-hidden />
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-[#18231D] mb-2">
                Your next step is a considered choice.
              </h1>
              <p className="text-[15px] text-[#5C675F] leading-relaxed">
                Explore available options, understand the risks, and choose only when you are ready.
              </p>
            </div>
          </div>

          {/* Demo verification success callout */}
          <div className="bg-[#DCEFE2] border border-[#c5e0cd] rounded-2xl p-4 mb-6 flex items-start gap-3">
            <span className="text-[20px]" aria-hidden="true">✅</span>
            <div>
              <p className="text-[14px] font-semibold text-[#174D3A]">Demo verification complete</p>
              <p className="text-[13px] text-[#5C675F] mt-0.5">
                Your demo KYC is done. In a real application, this would unlock regulated investment flows. This prototype does not facilitate actual investments.
              </p>
            </div>
          </div>

          {/* Educational note */}
          <div className="bg-white rounded-2xl border border-[#DDE3DC] p-5 mb-6 space-y-3">
            <h2 className="text-[16px] font-semibold text-[#18231D]">Before you explore</h2>
            <div className="space-y-2 text-[14px] text-[#5C675F] leading-relaxed">
              <p>
                <strong className="text-[#18231D]">Learning vs. choosing:</strong> Exploring products on this page is about learning what options exist. It is not the same as placing an order.
              </p>
              <p>
                <strong className="text-[#18231D]">Values can change:</strong> All investment values shown in production would reflect live market data. They can rise and fall. You may receive less than you invest.
              </p>
              <p>
                <strong className="text-[#18231D]">Take your time:</strong> There is no obligation to invest immediately. Continuing to learn before committing is a sensible approach.
              </p>
            </div>
          </div>

          {/* Primary actions */}
          {!showProducts ? (
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <PrimaryButton onClick={() => setShowProducts(true)} className="text-base py-4 flex-1">
                Explore investment options
              </PrimaryButton>
              <SecondaryButton onClick={() => navigate('/')} className="text-base py-4 flex-1">
                Keep learning
              </SecondaryButton>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-[18px] font-bold text-[#18231D]">Illustrative options</h2>
                <GhostButton onClick={() => setShowProducts(false)} className="text-sm">
                  Hide options
                </GhostButton>
              </div>

              <p className="text-[13px] text-[#5C675F] bg-[#F8F7F2] border border-[#DDE3DC] rounded-xl p-3 mb-4 leading-relaxed italic">
                The products shown below are illustrative examples for this prototype. They do not represent real financial products, live NAVs, or current availability. Production data and regulated workflows would be integrated separately.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {SAMPLE_PRODUCTS.map((product) => (
                  <ProductPreviewCard
                    key={product.id}
                    {...product}
                    onLearnMore={() => setSelectedProduct(product)}
                  />
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <SecondaryButton onClick={() => navigate('/')} className="text-base py-4 flex-1">
                  <BookOpen size={16} className="mr-2" aria-hidden="true" />
                  Keep learning
                </SecondaryButton>
              </div>
            </>
          )}

          {/* Final disclaimer */}
          <RiskDisclaimer variant="inline" className="mt-8" />
        </main>
      </div>

      {/* Product detail panel */}
      {selectedProduct && (
        <ProductDetailPanel
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}
