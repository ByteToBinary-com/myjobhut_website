import { ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export function CTASection({
  title = "Ready to move your hiring or career search forward?",
  description = "Talk to My Job Hut for hiring solutions, recruitment consulting, and practical employer support."
}: CTASectionProps) {
  return (
    <section className="bg-[#69608F] py-16 text-white">
      <div data-reveal className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-7 text-[#F0EEF7]">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/contact" variant="secondary" className="!bg-white !text-[#69608F] hover:!text-[#5A527C]">
            Contact Us <ArrowRight className="ml-2" size={16} />
          </Button>
          <Button href="/employers" className="bg-slate-950 hover:bg-slate-900">
            Hire Talent
          </Button>
        </div>
      </div>
    </section>
  );
}
