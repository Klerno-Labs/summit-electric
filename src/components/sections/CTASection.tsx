import Button from "@/components/ui/Button";

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-blue-600 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
      <p className="mb-6">Contact us today for a free estimate on your next project!</p>
      <Button variant="primary">Get a Free Estimate</Button>
    </section>
  );
};

export default CTASection;