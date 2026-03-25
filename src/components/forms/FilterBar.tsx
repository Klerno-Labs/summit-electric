const FilterBar = () => {
  return (
    <div className="sticky top-20 bg-white shadow-md z-40 p-4">
      <h2 className="text-xl font-semibold">Filter Services</h2>
      <select className="mt-2 border border-gray-300 rounded-md p-2">
        <option value="">All Services</option>
        <option value="electrical">Electrical</option>
        <option value="plumbing">Plumbing</option>
        <option value="hvac">HVAC</option>
      </select>
    </div>
  );
};

export default FilterBar;