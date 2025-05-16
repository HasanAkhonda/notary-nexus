export default function BioHighlight() {
  return (
    <div className="md:w-full text-center md:text-left space-y-4">
      <h4 className="text-[22px] text-green-400">About Us</h4>
      <h1 className="text-[40px] lg:text-[50px] text-green-700 font-bold leading-tight">
        Experts in Notary Services
      </h1>
      <h3 className="text-xl">Learn about the team</h3>
      <a
        href="/contact"
        className="inline-block mt-4 rounded-full border border-gray-300 px-8 py-3 text-[17px] hover:bg-gray-200 transition"
      >
        Contact us
      </a>
    </div>
  );
}
