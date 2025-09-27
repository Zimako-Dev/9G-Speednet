'use client';

import { CheckoutStep } from '@/app/checkout/page';
import { Truck, CreditCard, Eye, CheckCircle, Package } from 'lucide-react';

interface CheckoutStepsProps {
  currentStep: CheckoutStep;
}

const steps = [
  {
    id: 'shipping' as CheckoutStep,
    name: 'Shipping',
    description: 'Delivery information',
    icon: Truck,
  },
  {
    id: 'review' as CheckoutStep,
    name: 'Review',
    description: 'Order confirmation',
    icon: Eye,
  },
  {
    id: 'payment' as CheckoutStep,
    name: 'Payment',
    description: 'Payment details',
    icon: CreditCard,
  },
  {
    id: 'tracking' as CheckoutStep,
    name: 'Tracking',
    description: 'Order tracking',
    icon: Package,
  },
  {
    id: 'complete' as CheckoutStep,
    name: 'Complete',
    description: 'Order placed',
    icon: CheckCircle,
  },
];

export default function CheckoutSteps({ currentStep }: CheckoutStepsProps) {
  const getCurrentStepIndex = () => {
    return steps.findIndex(step => step.id === currentStep);
  };

  const currentStepIndex = getCurrentStepIndex();

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <nav aria-label="Progress">
        <ol className="flex items-center justify-between">
          {steps.map((step, stepIdx) => {
            const Icon = step.icon;
            const isCompleted = stepIdx < currentStepIndex;
            const isCurrent = stepIdx === currentStepIndex;
            const isUpcoming = stepIdx > currentStepIndex;

            return (
              <li key={step.id} className="relative flex-1">
                {/* Step Content */}
                <div className="flex flex-col items-center">
                  {/* Icon Circle */}
                  <div
                    className={`relative z-10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 transition-all duration-300 ${
                      isCompleted
                        ? 'bg-accent-green border-accent-green text-white'
                        : isCurrent
                        ? 'bg-primary-500 border-primary-500 text-white'
                        : 'bg-gray-100 border-gray-300 text-gray-400'
                    }`}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  {/* Step Info */}
                  <div className="mt-2 text-center">
                    <div
                      className={`text-sm font-medium ${
                        isCompleted || isCurrent
                          ? 'text-gray-900'
                          : 'text-gray-500'
                      }`}
                    >
                      {step.name}
                    </div>
                    <div className="text-xs text-gray-500 hidden sm:block">
                      {step.description}
                    </div>
                  </div>
                </div>

                {/* Connector Line */}
                {stepIdx < steps.length - 1 && (
                  <div
                    className={`absolute top-5 sm:top-6 h-0.5 transition-all duration-300 z-0 ${
                      stepIdx < currentStepIndex
                        ? 'bg-accent-green'
                        : 'bg-gray-300'
                    }`}
                    style={{
                      left: 'calc(50% + 24px)',
                      right: 'calc(-50% + 24px)',
                    }}
                  />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
