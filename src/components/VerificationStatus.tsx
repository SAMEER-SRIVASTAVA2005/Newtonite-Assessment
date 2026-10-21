// VerificationStatus — loading, success, additionalInfo, and failed states
// Each state must display explicit copy — never a bare spinner.

import { CheckCircle2, XCircle, AlertCircle, Loader2 } from 'lucide-react';
import { PipMascot } from './PipMascot';
import { PrimaryButton, SecondaryButton } from './Buttons';

type VerifStatus = 'processing' | 'success' | 'additionalInfo' | 'failed';

interface VerificationStatusProps {
  status: VerifStatus;
  onRetry?: () => void;
  onContinue?: () => void;
  onSupport?: () => void;
}

export function VerificationStatus({ status, onRetry, onContinue, onSupport }: VerificationStatusProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className="flex flex-col items-center text-center gap-4 py-6"
    >
      {status === 'processing' && (
        <>
          <PipMascot state="verification" size={72} />
          <Loader2 size={28} className="text-[#174D3A] animate-spin mt-2" aria-hidden="true" />
          <div>
            <h3 className="text-[17px] font-semibold text-[#18231D] mb-2">Verification in progress</h3>
            <p className="text-[14px] text-[#5C675F] leading-relaxed max-w-xs mx-auto">
              Please keep this screen open while we process your demo submission. This simulates the verification step in a real flow.
            </p>
          </div>
        </>
      )}

      {status === 'success' && (
        <>
          <PipMascot state="success" size={72} />
          <CheckCircle2 size={28} className="text-[#176B45]" aria-hidden="true" />
          <div>
            <h3 className="text-[17px] font-semibold text-[#18231D] mb-2">Demo verification complete.</h3>
            <p className="text-[14px] text-[#5C675F] leading-relaxed max-w-xs mx-auto mb-4">
              Your demo verification has finished. In a live application, this would mean your identity was verified with the KYC provider.
            </p>
            <p className="text-[12px] text-[#5C675F] bg-[#F8F7F2] border border-[#DDE3DC] rounded-lg px-3 py-2 max-w-xs mx-auto">
              This demo does not represent real regulatory verification.
            </p>
          </div>
          <PrimaryButton onClick={onContinue}>
            Continue to first investment
          </PrimaryButton>
        </>
      )}

      {status === 'additionalInfo' && (
        <>
          <PipMascot state="error" size={72} />
          <AlertCircle size={28} className="text-[#B42318]" aria-hidden="true" />
          <div>
            <h3 className="text-[17px] font-semibold text-[#18231D] mb-2">Additional information needed</h3>
            <p className="text-[14px] text-[#5C675F] leading-relaxed max-w-xs mx-auto mb-4">
              The demo flow requires a correction. In a real flow, you would be asked to review or resubmit specific information.
            </p>
          </div>
          <PrimaryButton onClick={onRetry}>Retry demo</PrimaryButton>
        </>
      )}

      {status === 'failed' && (
        <>
          <PipMascot state="error" size={72} />
          <XCircle size={28} className="text-[#B42318]" aria-hidden="true" />
          <div>
            <h3 className="text-[17px] font-semibold text-[#18231D] mb-2">Demo verification could not complete.</h3>
            <p className="text-[14px] text-[#5C675F] leading-relaxed max-w-xs mx-auto mb-4">
              The demo encountered a simulated issue. In a real flow, you would receive guidance on next steps.
            </p>
          </div>
          <div className="flex flex-col gap-3 w-full max-w-xs">
            <PrimaryButton onClick={onRetry} fullWidth>Retry demo</PrimaryButton>
            <SecondaryButton onClick={onSupport} fullWidth>Contact support</SecondaryButton>
          </div>
        </>
      )}
    </div>
  );
}
