type Step = {
  number: string;
  text: string;
};

type StepFlowProps = {
  steps: Step[];
};

export default function StepFlow({ steps }: StepFlowProps) {
  return (
    <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((step) => (
        <li key={step.number} className="border-t-2 border-black pt-4">
          <span className="font-heading text-3xl font-black tracking-[-0.02em] text-blue">
            {step.number}
          </span>
          <p className="mt-2 text-base leading-relaxed">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
